// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'



// const Loops : React.FC = () => {

//     const items : string[] = ['Apple' , 'Banana' , 'Cherry' , 'Date' , 'Elderberry']


//   return (
//     <View style={styles.container}>
//         {items.map((item , index) => (
//             <Text key={index}>{item}</Text>
//         ))}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container : {
//         flex : 1,
//         justifyContent : 'center',
//         alignItems : 'center'
//     }
// })

// export default Loops;

// for loop example

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Loops : React.FC = () => {

//     const numbers : number[] = [];

//     for(let i = 0 ; i < 10 ; i++){
//         numbers.push(i);
//     }

//   return (
//     <View style={styles.container}>
  
//   {numbers.map((number , index) => (
//       <Text key={index}>Number : {number}</Text>
//   ))}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container : {
//         flex : 1,
//         justifyContent : 'center',
//         alignItems : 'center'
//     }, 
//     text : {
//         fontSize : 20
//     }
// })

// export default Loops;

// forEach loop example

import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'



const Loops : React.FC = ( ) => {

    const fruits : string[] = ['Apple' , 'Banana' , 'Cherry' , 'Date' , 'Elderberry'];

        const [fruit , setFruit] = React.useState<string>('');

    useEffect(() => {
        fruits.forEach((fruit , index) => {
            setFruit(fruit);
        })
    }, []);


  return (
    <View>
      <Text>Loops</Text>
    </View>
  )
}

const styles = StyleSheet.create({})