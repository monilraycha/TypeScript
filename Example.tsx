import React, {useState} from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';

// Define TypeScript types
type User = {
  id: number;
  name: string;
  email: string;
};

type AppProps = {};

// Main App Component
const Example = ({}: AppProps) => {
  // Object state: selectedUser
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Array state: users
  const [users, setUsers] = useState<User[]>([
    {id: 1, name: 'John Doe', email: 'john.doe@example.com'},
    {id: 2, name: 'Jane Smith', email: 'jane.smith@example.com'},
  ]);

  // Add a new user to the list (ES6 arrow function and spread operator)
  const addUser = () => {
    setUsers(prevUsers => [
      ...prevUsers,
      {
        id: prevUsers.length + 1,
        name: `New User ${prevUsers.length + 1}`,
        email: `user${prevUsers.length + 1}@example.com`,
      },
    ]);
  };

  // Select a user to display details
  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <View style={styles.container}>
      {/* Selected User Details */}
      <View style={styles.details}>
        {selectedUser ? (
          <>
            <Text style={styles.title}>Selected User:</Text>
            <Text style={styles.text}>Name: {selectedUser.name}</Text>
            <Text style={styles.text}>Email: {selectedUser.email}</Text>
          </>
        ) : (
          <Text style={styles.text}>No user selected</Text>
        )}
      </View>

      {/* User List */}
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text style={styles.text}>{item.name}</Text>
            <Button
              title="Select"
              onPress={() => handleSelectUser(item)}
              color="#1E90FF"
            />
          </View>
        )}
      />

      {/* Add User Button */}
      <Button title="Add User" onPress={addUser} color="#32CD32" />
    </View>
  );
};

// Styles (ES6 object shorthand)
const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#f9f9f9'},
  details: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {fontSize: 16},
  title: {fontSize: 18, fontWeight: 'bold', marginBottom: 5},
});

export default Example;
