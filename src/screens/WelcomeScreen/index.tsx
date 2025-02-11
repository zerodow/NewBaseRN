import SafeAreaWrapper from "@/components/SafeAreaWrapper"
import CommonHeader from "@/components/CommonHeader"
import { Button, Text, View } from "react-native"
import { commonStyles } from "@/theme/commonStyles"
import { navigate } from "@/navigators/navigationUtilities"

const WelcomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <CommonHeader title="Welcome Screen asdasd" />
      <View style={commonStyles.flex1}>
        <Text>asdasdads</Text>
        <Button title="To Login" onPress={() => navigate("Login")} />
      </View>
    </SafeAreaWrapper>
  )
}

export default WelcomeScreen
