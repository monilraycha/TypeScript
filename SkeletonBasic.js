import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonBasic = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <SkeletonPlaceholder>
          <View style={styles.skeleton}>
            <View style={styles.avatar} />
            <View style={styles.textContainer}>
              <View style={styles.text} />
              <View style={styles.text} />
            </View>
          </View>
        </SkeletonPlaceholder>
      ) : (
        <View style={styles.content}>
          <Text style={styles.title}>John Doe</Text>
          <Text style={styles.body}>This is a simple example of a skeleton loader.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  skeleton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 16,
  },
  text: {
    width: 120,
    height: 12,
    borderRadius: 4,
    marginBottom: 8,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default SkeletonBasic;
