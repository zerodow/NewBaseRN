import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import { navigationRef, useBackButtonHandler } from "./src/navigators/navigationUtilities"
import React, { useEffect, useState } from "react"
import { initI18n } from "@/i18n"
import { ThemeProvider } from "@/context/ThemeContext"
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import { View } from "react-native"
import { AppStack } from "@/navigators"
import { loadDateFnsLocale } from "@/utils/formatDate"
import NetworkButton from "@/devtools/network-logger/NetworkButton"

const exitRoutes = ["welcomeScreen"]

const App = () => {
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
      <ThemeProvider>
        <NavigationContainer
          ref={navigationRef as React.Ref<NavigationContainerRef<any>>}
          fallback={<View />}
          onReady={() => {}}
        >
          <AppStack />
          {!__DEV__ && <NetworkButton />}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
