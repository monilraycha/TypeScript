import React, {Component} from 'react';
import {Text, View} from 'react-native';

interface MyProps {
  name: string;
  age: number;
  email: string;
}
interface MyState {
  counter: number;
}

export default class classComp extends Component<MyProps, MyState> {
  render() {
    return (
      <View>
        <Text> {this.props.name + this.props.age + this.props.email} </Text>
      </View>
    );
  }
}
