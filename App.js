import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import CreateNegocio from './src/pages/init';
import Negocio from './src/pages/negocio';

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Criar negocio'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Criar negocio"
          component={CreateNegocio}
          options={{ headerShown: false }} />
        <Stack.Screen name="Negocio" component={Negocio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

