import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import ChooseLocation from './src/Screens/ChooseLocation';


const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="chooseLocation" component={ChooseLocation} />
      </Stack.Navigator>
      <FlashMessage
        position="top"
      />
    </NavigationContainer>
    // <View>
    //   <Text>sdh</Text>
    // </View>
  );
};

export default App;
