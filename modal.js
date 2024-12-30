import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const transparent = 'rgba(0,0,0,0.5)';

const modal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  function renderModal() {
    return (
      <Modal animationType= "slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)} >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: transparent,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              width: '80%',
              height: '30%',
            }}>
            <Text style={{textAlign: 'center', fontSize: 20}}>
              Modal Content
            </Text>
          </View>
          <TouchableOpacity
            style={{marginTop: 10, backgroundColor: 'red', padding: 10}}
            onPress={() => setModalVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <TouchableOpacity
        style={{backgroundColor: 'red', padding: 10}}
        onPress={() => setModalVisible(true)}>
        <Text style={{color: 'white'}}>Open Modal</Text>
      </TouchableOpacity>

      {renderModal()}
    </View>
  );
};

const styles = StyleSheet.create({});

export default modal;
