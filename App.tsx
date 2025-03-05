import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import { navigationRef, useBackButtonHandler } from "./src/navigators/navigationUtilities"
import React, { useEffect, useState } from "react"
import { initI18n } from "@/i18n"
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import { View } from "react-native"
import { AppStack } from "@/navigators"
import { loadDateFnsLocale } from "@/utils/formatDate"
import NetworkButton from "@/devtools/network-logger/NetworkButton"
import useSystemTheme from "@/hooks/useSystemTheme"

const exitRoutes = ["welcomeScreen"]

const App = () => {
  useSystemTheme()
  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  const [isI18nInitialized, setIsI18nInitialized] = useState<boolean>(false)

  //load i18n lang and date lang
  useEffect(() => {
    initI18n()
      .then(() => setIsI18nInitialized(true))
      .then(() => loadDateFnsLocale())
  }, [])

  if (!isI18nInitialized) {
    return null
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer
        ref={navigationRef as React.Ref<NavigationContainerRef<any>>}
        fallback={<View />}
        onReady={() => {}}
      >
        <AppStack />
        {!__DEV__ && <NetworkButton />}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
