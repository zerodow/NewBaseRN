import { View, Text, Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "../../theme/style"
import { useAppColorScheme } from "twrnc"
import { goBack } from "../../navigators/navigationUtilities"
import Config from "react-native-config"

const LoginScreen = () => {
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw)

  return (
    <SafeAreaView style={tw`flex-1 bg-red-400`}>
      <View style={tw`flex-1 bg-black dark:bg-white`}>
        <Text style={tw`text-red-500 mt-5 text-[13px]`}>{Config.API_BASE_URL}</Text>
        <Button
          onPress={() => {
            toggleColorScheme()
            // navigate('Login');
          }}
          title="navigate"
        />
        <Button
          onPress={() => {
            setColorScheme(colorScheme)

            goBack()
          }}
          title="back"
        />
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
