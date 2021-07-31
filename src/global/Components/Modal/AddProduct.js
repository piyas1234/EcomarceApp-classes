import React, {useState} from 'react';
import { Text,  View,  Modal,  Pressable, } from 'react-native';
import AddProductForm from '../Form/AddProductForm';
import styles from './styles';

const AddProduct = ({type}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
                


                {type==="addproduct" &&<AddProductForm/>}



            </View>
          </View>
        </Modal>
      </View>
      <View style={{width: 200}}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Add Product</Text>
        </Pressable>
      </View>
    </>
  );
};

 

export default AddProduct;
