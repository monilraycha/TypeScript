import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Loops: React.FC = () => {
  const fruits: string[] = ['Apple', 'Banana', 'Cherry'];

  useEffect(() => {
    fruits.forEach((fruit) => {
      console.log(fruit);
    });
  }, []);

  return (
    <View style={styles.container}>
      {fruits.map((fruit, index) => (
        <Text key={index} style={styles.item}>
          {fruit}
        </Text>
      ))}
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
  item: {
    fontSize: 18,
    marginVertical: 4,
  },
});

export default Loops;
