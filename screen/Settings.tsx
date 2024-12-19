import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../screens/AppNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';

interface SettingsProps {
    navigation: StackNavigationProp <RootStackParamList, 'Settings'>;
}

export default function Settings({navigation} : SettingsProps) {

    const route = useRoute();

    console.log(route.params);

  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({})