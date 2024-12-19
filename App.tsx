// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import ClassComp from './screens/ClassComp'
// import FunctionalComp from './screens/FunctionalComp'
// import AppNavigator from './screens/AppNavigator'

// export default function App() {
//   return (
//     <View>
//       <Text>App</Text>
//       {/* <ClassComp name = {'monil'} age = {10} email = {'@gmail.com'}  />  */}
//       {/* <FunctionalComp name = {'monil'} age = {10} email = {'@gmail.com'}  /> */}

//       <AppNavigator  />
//     </View>
//   )
// }

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screen/Home'
import Settings from './screen/Settings'

export type RootStackParamList = {
    Home : undefined,
    Settings: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer> 
        <Stack.Navigator>

            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Settings' component={Settings} />

           
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App