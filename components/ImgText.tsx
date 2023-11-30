
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface ImgTextProps {
  modalVisible: boolean;
  closeModal: () => void;
  data: Data;
}

interface Data {
  titulo: string;
  url: string;
}

const ImgText: React.FC<ImgTextProps> = ({ modalVisible, closeModal, data }) => {
  const verDatos = () => {
    closeModal();
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.container}>
            <Text style={styles.title}>Título: {data.titulo}</Text>
            <Image style={styles.img1} source={{uri:data.url}}/>
            <TouchableOpacity style={styles.btn} onPress={verDatos}>
              <Text style={styles.txt}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ImgText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    opacity:0.95,
  },
  img1:{
    width:400,
    height:200,
  },
  btn:{
    width:100,
    height:50,
    borderRadius:20,
    borderColor:'#fff',
    backgroundColor:'black',
    alignItems:'center',
    margin:10

  },
  txt:{
    color:'white',
    padding: 11,
    fontSize:20
  },
  title:{
    padding: 11,
    fontSize:20,
    textDecorationLine:'underline'

  }
});
