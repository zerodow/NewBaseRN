import { View, Text, Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "../../theme/style"
import { useAppColorScheme } from "twrnc"

const LoginScreen = () => {
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw)

  return (
    <SafeAreaView style={tw`flex-1 bg-red-400`}>
      <View style={tw`flex-1 bg-black dark:bg-white`}>
        <Text>LoginScreen</Text>
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
