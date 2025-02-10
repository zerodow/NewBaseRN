import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Config from "react-native-config"
const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text>{Config.API_BASE_URL}</Text>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // eslint-disable-next-line react-native/no-color-literals
  wrapper: {
    flex: 1,
  },
})
