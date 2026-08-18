import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './telas/Home'
import Especies from './telas/Especies'
import Curiosidades from './telas/Curiosidades'

const Stack = createNativeStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name={"Home"} component={Home} options={{ headerShown: false }} />
        <Stack.Screen name={"Especies"} component={Especies} options={{ headerShown: false }} />
        <Stack.Screen name={"Curiosidades"} component={Curiosidades} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}