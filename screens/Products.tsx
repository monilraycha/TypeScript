// Flatlist with typescript array using api call

import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductItem from './ProductItem';

interface ProductState {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: any;
  title: string;
}

export default function Products() {
  const [products, setProducts] = React.useState<ProductState[]>([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => {
        setProducts(json); // Use the same 'json' here
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item, index}: {item: ProductState; index: number}) => (
          <ProductItem item={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//https://fakestoreapi.com/products
