import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { ComponentProps } from "react"
import LoginScreen from "../screens/LoginScreen/LoginScreen"

export type AppStackParamList = {
  Welcome: undefined
  Login: undefined
  // Demo: NavigatorScreenParams<DemoTabParamList>;
  // 🔥 Your screens go here
  // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
}

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

export interface NavigationProps extends Partial<ComponentProps<typeof NavigationContainer>> {}

const Stack = createNativeStackNavigator<AppStackParamList>()

export const AppStack = () => {
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
