import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CommonTextInput from './CommonTextInput';

export default function Components() {
  const [name, setName] = React.useState<string>('');
  const [number, setNumber] = React.useState<string>('');
  const [badName, setBadName] = React.useState<boolean>(false);
  const [badNumber, setBadNumber] = React.useState<boolean>(false);

  const validate = () => {
    let valid = true;

    if (name === '') {
      valid = false;
      setBadName(true);
    } else if (name !== '') {
      setBadName(false);
    }
    if (name === '') {
      valid = false;
      setBadName(true);
    } else if (name !== '') {
      setBadName(false);
    }

    if (number === '') {
      valid = false;
      setBadNumber(true);
    } else if (number !== '') {
      setBadNumber(false);
    }
  };

  return (
    <View style={styles.container}>
      <CommonTextInput
        placeholder="Enter your name"
        maxLength={10}
        value={name}
        onChangeText={(text: string) => setName(text)} // Updated typing
        keyboardType="default"
        disabled={false}
        validate={badName}
      />

      {badName ? (
        <Text style={{color: 'red'}}>Please enter your name</Text>
      ) : null}

      <CommonTextInput
        placeholder="Enter your number"
        maxLength={10}
        value={number}
        onChangeText={(text: string) => setNumber(text)} // Updated typing
        keyboardType="phone-pad"
        disabled={false}
        validate={badNumber}
      />

      {badNumber ? (
        <Text style={{color: 'red'}}>Please enter your number</Text>
      ) : null}

      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: '90%',
          alignSelf: 'center',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={() => validate()}>
        <Text style={{color: 'white'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
