import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/pages/LoginPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterPage from './src/pages/RegisterPage';
import ForgotPasswordPage from './src/pages/ForgotPasswordPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Login' options={{headerShown: false}} component={LoginPage}/>
        <Stack.Screen name = 'Register' options={{headerShown: false}} component={RegisterPage}/>
        <Stack.Screen name = 'ForgotPassword' component={ForgotPasswordPage}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
