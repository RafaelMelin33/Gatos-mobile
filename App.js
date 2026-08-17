import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './telas/Home'
import Contato from './telas/Contato'

const Stack = createNativeStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"Contato"} component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}