import { View, Text, Button } from "react-native"
import { remove } from "@/storage"
import STORAGE_KEY from "@/storage/keyManager"

const ProfileScreen = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="Logout" onPress={() => remove(STORAGE_KEY.LOGGED_IN)} />
    </View>
  )
}

export default ProfileScreen
