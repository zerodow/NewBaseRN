/* eslint-disable react-native/no-unused-styles */
import { Button, View } from "react-native"
import SafeAreaWrapper from "@/components/SafeAreaWrapper"
import CommonHeader from "@/components/CommonHeader"
import { commonStyles } from "@/theme/commonStyles"
import { navigate } from "@/navigators/navigationUtilities"
import { save } from "@/storage"
import STORAGE_KEY from "@/storage/keyManager"

const LoginScreen = () => {
  return (
    <SafeAreaWrapper>
      <CommonHeader title="Login Screen" />
      <View style={commonStyles.flex1}>
        <Button title="Register" onPress={() => navigate("Register")} />
        <Button title="Forgot Password" onPress={() => navigate("ForgotPassword")} />
        <Button title="Login " onPress={() => save(STORAGE_KEY.LOGGED_IN, true)} />
      </View>
    </SafeAreaWrapper>
  )
}

export default LoginScreen
