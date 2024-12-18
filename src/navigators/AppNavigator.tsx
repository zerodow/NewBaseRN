/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
// import {observer} from 'mobx-react-lite';
// import * as Screens from '@/screens';
import Config from "../config"
// import {useStores} from '../models';
// import {DemoNavigator, DemoTabParamList} from './DemoNavigator';
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
// import {useAppTheme, useThemeProvider} from '@/utils/useAppTheme';
import { ComponentProps } from "react"
import React from "react"
import { View } from "react-native"
import LoginScreen from "../screens/LoginScreen/LoginScreen"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Welcome: undefined
  Login: undefined
  // Demo: NavigatorScreenParams<DemoTabParamList>;
  // 🔥 Your screens go here
  // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = () => {
  // const {
  //   authenticationStore: {isAuthenticated},
  // } = useStores();

  // const {
  //   theme: {colors},
  // } = useAppTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // navigationBarColor: colors.background,
        // contentStyle: {
        //   backgroundColor: colors.background,
        // },
      }}
      initialRouteName={"Welcome"}
    >
      <Stack.Screen name="Welcome" component={LoginScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />

      {/** 🔥 Your screens go here */}
      {/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}
    </Stack.Navigator>
  )
}
export interface NavigationProps extends Partial<ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      {...props}
      ref={navigationRef as React.Ref<NavigationContainerRef<any>>}
      fallback={<View />}
      onReady={() => {}}
    >
      <AppStack />
    </NavigationContainer>
  )
}
