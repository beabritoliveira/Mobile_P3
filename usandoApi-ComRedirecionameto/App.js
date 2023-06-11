import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from './src/pages/MoviesPage';
import MoviesDetaisPage from './src/pages/MovieDetailsPage';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MoviesPage' component={MoviesPage} 
        options={{headerShown: false}}/>
        <Stack.Screen name='DetaisPage' component={MoviesDetaisPage} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
