// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../screens/AppNavigator';

// interface HomeProps {
//     navigation : StackNavigationProp<RootStackParamList, 'Home'>
// }

// export default function Home({navigation} : HomeProps) {
//   return (
//     <View>
//       <Text style = {{padding : 10 , fontSize : 20}}

//        onPress={
//         () => navigation.navigate('Settings',{
//             name : 'monil',
//             email : '@gmail.com'
//         })
//        }
//       >Go to settings </Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View , TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../screens/AppNavigator';

interface HomeProps {
    navigation : StackNavigationProp<RootStackParamList, 'Home'>
}

interface User {
    name : string,
    email : string,
    age : number
}

interface Items {
    title : string,
    id : number,
    price : number
}

export default function Home({navigation} : HomeProps) {

    const [counter, setCounter] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [user ,setUser] = useState<User> ({
        age : 0,
        email : '',
        name : ''
    })
    
    const [items , setItems] = useState<Items []>([]);

    const [details , setDetails] = useState<null>(null);

    const ref = useRef<TextInput>(null);

    interface HomeScreenProps {
        navigation : StackNavigationProp<RootStackParamList, 'Home'>
    }





  return (
    <View>
      <TextInput
      ref = {ref}
      />

    </View>
  )
}

const styles = StyleSheet.create({})