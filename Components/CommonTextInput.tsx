import { StyleSheet, Text, View , TextInput} from 'react-native';
import React from 'react'

type InputProps = {
    placeholder: string,
    value: string,
    onChangeText : any,
    maxLength : number , 
    keyboardType: 'default' | 'email-address' | 'numeric' | 'phone-pad',
    disabled : boolean,
    validate : boolean

}

export default function CommonTextInput({placeholder , value , onChangeText  , maxLength , keyboardType , disabled , validate} : InputProps) {
  return (
    <View style ={{
        width : '90%',
        height : 40,
        borderWidth : 1,
        borderRadius : 10,
        borderColor : validate ? 'red' : 'gray',
        marginTop : 10
    }}>

        <TextInput 
         placeholder={placeholder}
         value={value}
         onChangeText={onChangeText}
         maxLength={maxLength}
         keyboardType={keyboardType}
         editable={!disabled}
         secureTextEntry={validate}
        />
      
    </View>
    
  )
}

const styles = StyleSheet.create({})