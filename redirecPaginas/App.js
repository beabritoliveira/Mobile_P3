import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import ForgotPasswordPage from './src/pages/ForgotPasswordPages';
import RegisterPage from './src/pages/RegisterPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name='LoginPage' component={LoginPage}/>
            <Stack.Screen name='RegisterPage' component={RegisterPage}/>
            <Stack.Screen name='ForgotPasswordPage' component={ForgotPasswordPage}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

