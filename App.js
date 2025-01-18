import 'react-native-url-polyfill/auto';  // Make sure this is at the top
import React,{useEffect} from 'react';
import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import Wallet from './wallet';
import Profile from './profile';
import Home from './home';
import TournamentDetails from './tournamentDetails';
import Gameroom from './gameroom';
import Mission from './mission';
import Rewards from './rewards';
import LoginScreen from './login';
import SignupScreen from './signup';
import Kyc from './kyc';
import Addcash from './addcash';
import Test from './test';
import PrivateRoom from './privateroom';
import Transaction from './alltransactions';


export default function App() {

  const Stack = createStackNavigator();
  enableScreens();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
     <Stack.Screen name='Home' component={Home} />
     <Stack.Screen name='Profile' component={Wallet} />
     <Stack.Screen name='EditProfile' component={Profile} />
     <Stack.Screen 
        name="TournamentDetailsById" 
        component={TournamentDetails} 
      />
     <Stack.Screen name='Game' component={Gameroom} />
     <Stack.Screen name='Privateroom' component={PrivateRoom} />
     <Stack.Screen name='Mission' component={Mission} />
     <Stack.Screen name='Rewards' component={Rewards} />
     <Stack.Screen name='Login' component={LoginScreen} />
     <Stack.Screen name='Signup' component={SignupScreen} />
     <Stack.Screen name='Kyc' component={Kyc} />
     <Stack.Screen name='Addcash' component={Addcash} />
     <Stack.Screen name='Test' component={Test} />
     <Stack.Screen name='Transaction' component={Transaction} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
