import {View, Text, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {goBack, navigate} from '../../navigators/navigationUtilities';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>LoginScreen</Text>
        <Button
          onPress={() => {
            navigate('Login');
          }}
          title="navigate"
        />
        <Button
          onPress={() => {
            goBack();
          }}
          title="back"
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
