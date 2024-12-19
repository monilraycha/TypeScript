import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../Redux/reduxwithts/hooks';
import {addNote, Note, noteSelector} from '../Redux/reduxwithts/notesslice';

export default function ReduxList() {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const dispatch = useAppDispatch();
  const notes = useAppSelector(noteSelector);
  console.log(notes);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TextInput
        placeholder="enter note title "
        style={styles.inputStyle}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        placeholder="enter description "
        style={styles.inputStyle}
        value={desc}
        onChangeText={text => setDesc(text)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: '90%',
          alignSelf: 'center',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => dispatch(addNote({
          title, desc,
          id: ''
        }))}>
        <Text style={{color: 'white'}}>Add a note</Text>
      </TouchableOpacity>

      <FlatList
        data={notes}
        keyExtractor={(item, index) => item.id || index.toString()} // Unique key for each item
        renderItem={({item}: {item: Note}) => (
          <View
            style={styles.flatListStyle}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#333',
                marginBottom: 5,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#666',
              }}>
              {item.desc}
            </Text>
          </View>
        )}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  flatListStyle: {
    width: '95%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 15,
    marginVertical: 10,
  },
});
