import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Animated, TouchableWithoutFeedback } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import axios from 'axios';

const Axios = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products data from the API
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setTimeout(() => {
          setProducts(response.data.products); // Set products after 3 seconds
          setLoading(false); // Stop loading after delay
        }, 3000); // 3-second delay
      })
      .catch((error) => {
        console.log('Error fetching products:', error);
        setLoading(false); // Stop loading on error
      });
  }, []);



  // Animation for "Add to Cart" button
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9, // Shrink the button
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1, // Restore button size
      useNativeDriver: true,
    }).start(() => alert('Added to Cart'));
  };

  // Show loading text while data is being fetched
  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 10 }}>Loading Products...</Text>
        <SkeletonPlaceholder>
          {Array(5)
            .fill()
            .map((_, index) => (
              <View key={index} style={styles.cardSkeleton}>
                <View style={styles.thumbnailSkeleton} />
                <View style={styles.detailsSkeleton}>
                  <View style={styles.titleSkeleton} />
                  <View style={styles.descriptionSkeleton} />
                  <View style={styles.priceSkeleton} />
                  <View style={styles.ratingSkeleton} />
                  <View style={styles.buttonSkeleton} />
                </View>
              </View>
            ))}
        </SkeletonPlaceholder>
      </View>
    );
  }
  

  // Render each product in a card format
  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription} numberOfLines={3}>
          {item.description}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productRating}>Rating: {item.rating}</Text>
        {/* Animated Button */}
        <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <Animated.View style={[styles.addToCartButton, { transform: [{ scale: scaleAnim }] }]}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 20}}>Product List </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  productList: {
    paddingBottom: 20,
    marginTop: 10,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productDetails: {
    marginLeft: 15,
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'OpenSans_Condensed-Medium'
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    fontFamily: 'OpenSans-italic-VariableFont_wdth,wght'
  },
  productPrice: {
    fontSize: 16,
    color: '#2a9d8f',
    marginBottom: 5,
    fontFamily: 'OpenSans-VariableFont_wdth,wght'
  },
  productRating: {
    fontSize: 14,
    marginBottom: 10,
    color: 'orange',
  },
  addToCartButton: {
    backgroundColor: '#2a9d8f',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 'auto',
    width: '70%',
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,

  },
  cardSkeleton: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnailSkeleton: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  detailsSkeleton: {
    marginLeft: 15,
    flex: 1,
  },
  titleSkeleton: {
    width: '70%',
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
  },
  descriptionSkeleton: {
    width: '90%',
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
  },
  priceSkeleton: {
    width: '50%',
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
  },
  ratingSkeleton: {
    width: '40%',
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
  },
  buttonSkeleton: {
    width: '60%',
    height: 40,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginTop: 10,
  },
  
});

export default Axios;
