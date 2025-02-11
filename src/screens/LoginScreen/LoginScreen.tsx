/* eslint-disable react-native/no-unused-styles */
import { Button, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Config from "react-native-config"
import { useTheme } from "@/hooks/useTheme"
import { Theme } from "@/types/theme"
import { changeLanguage } from "@/i18n"
import { LANGUAGE_NAME } from "@/utils/constant"
import { useTranslation } from "react-i18next"

const LoginScreen = () => {
  const { theme, toggleTheme } = useTheme()
  const styles = createStyles(theme)

  const { t } = useTranslation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.txt}>{Config.API_BASE_URL}</Text>
        <Button title={t("postscript")} onPress={() => toggleTheme()} />
        <View style={styles.row}>
          <Button title={t("EN")} onPress={() => changeLanguage(LANGUAGE_NAME.EN)} />
          <Button title={t("VI")} onPress={() => changeLanguage(LANGUAGE_NAME.VI)} />
        </View>
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
    row: {
      flexDirection: "row",
    },
    txt: {
      color: theme.colors.text,
      fontSize: 14,
    },
    wrapper: {
      flex: 1,
    },
  })
