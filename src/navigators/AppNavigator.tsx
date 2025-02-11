import { NavigationContainer } from "@react-navigation/native"
import { ComponentProps } from "react"
import AuthStack from "./AuthStack"
import { useMMKVBoolean } from "react-native-mmkv"
import STORAGE_KEY from "@/storage/keyManager"
import { storage } from "@/storage"
import MainTabs from "./MainTab"

export interface NavigationProps extends Partial<ComponentProps<typeof NavigationContainer>> {}

export const AppStack = () => {
  // const {
  //   authenticationStore: {isAuthenticated},
  // } = useStores();
  const [isLoggedIn] = useMMKVBoolean(STORAGE_KEY.LOGGED_IN, storage)

  if (isLoggedIn) {
    return <MainTabs />
  }
  return <AuthStack />
}
