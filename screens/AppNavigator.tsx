import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screen/Home'
import Settings from '../screen/Settings'

export type RootStackParamList = {
    Home : undefined,
    Settings: {
        name: string,
        email: string
    }   
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator = () => {
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

export default AppNavigator