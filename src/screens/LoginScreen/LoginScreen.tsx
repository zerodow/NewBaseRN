/* eslint-disable react-native/no-unused-styles */
import { Button, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Config from "react-native-config"
import { useTheme } from "@/hooks/useTheme"
import { Theme } from "@/types/theme"

const LoginScreen = () => {
  const { theme, toggleTheme } = useTheme()
  const styles = createStyles(theme)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.txt}>{Config.API_BASE_URL}</Text>
        <Button title="Change theme" onPress={() => toggleTheme()} />
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    txt: {
      color: theme.colors.text,
      fontSize: 14,
    },
    wrapper: {
      flex: 1,
    },
  })
