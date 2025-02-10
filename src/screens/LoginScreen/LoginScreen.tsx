import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper} />
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
