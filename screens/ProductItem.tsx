import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

interface ProductItemProps {
  item: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: any;
    title: string;
  };
}

export default function ProductItem({item}: ProductItemProps) {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.info}>
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  info: {
    marginLeft: 10,
    padding: 10,
  },

  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 16,
    color: 'gray',
    overflow: 'hidden',
    marginTop: 10,
  },
});
