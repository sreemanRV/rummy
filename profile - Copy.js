import React,{useState} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Modal, TextInput, Animated } from 'react-native';

const Profile = () => {
  const slideAnim = new Animated.Value(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("Sreeman R");

  const handleOpenModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleCloseModal = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const handleSave = () => {
    // Logic to save the new name can go here
    setModalVisible(false);
  };

  return (
    <View style={{flex:1}}>
    <View style={styles.show}>

    </View>
    <View style={{position:'relative',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

    <View style={styles.container}>

    </View>
    <View style={styles.basecontainer}>

    </View>
    <View style={{flexDirection:'Column',alignItems:'center',position:'absolute',}}>
      <Image source={require('./assets/profile.png')} style={styles.profileImage} />
      <Text style={{fontSize:16,fontWeight:800}}>Sree</Text>
      </View>
    </View>
    <ScrollView style={{backgroundColor:'#E8E0DD',flex:1}}>
      <View style={{paddingHorizontal:20,paddingVertical:10,flexDirection:'column',gap:20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{fontWeight:800,fontSize:16}}>Personal Information</Text>
        </View>
        <View>
        <View style={styles.card}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text style={{fontSize:14}}>Your Name</Text>
          <Text style={{fontWeight:800}}>Sreeman R</Text>
          </View>

          </View>
          <TouchableOpacity onPress={handleOpenModal} style={styles.buttonoutline}>
            <Text >Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20,borderRadius:100}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Date of Birth</Text>
          <Text style={{fontWeight:800}}>28 July, 2001</Text>
          </View>

          </View>
          <View style={styles.buttonoutline}>
            <Text>Edit</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Email</Text>
          <Text style={{fontWeight:800}}>sree@gmail.com</Text>
          </View>

          </View>
          <View style={styles.buttonoutline}>
            <Text>Change</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Phone number</Text>
          <Text style={{fontWeight:800}}>9080540620</Text>
          </View>

          </View>
          <TouchableOpacity style={styles.buttonoutline}>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Gender</Text>
          <Text style={{fontWeight:800}}>Male</Text>
          </View>

          </View>
          <View style={styles.buttonoutline}>
            <Text>Edit</Text>
          </View>
        </View>
        </View>
      </View>

      <View style={{paddingHorizontal:20,paddingVertical:10,flexDirection:'column',gap:20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{fontWeight:800,fontSize:16}}>Preference</Text>
        </View>

        <View style={styles.preferencecard}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text style={{fontSize:14}}>Password</Text>
          </View>

          </View>
          <TouchableOpacity style={styles.buttonoutline}>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.preferencecard}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20,borderRadius:100}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Choose your Language</Text>
          </View>
          </View>
          <View style={styles.buttonoutline}>
            <Text>Edit</Text>
          </View>
        </View>
        <View style={styles.preferencecard}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Responsible Gaming</Text>
          </View>

          </View>
 
          <Image style={{width:15,height:15}} source={require('./assets/next.png')}  />

        </View>
        <View style={styles.preferencecard}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Settings</Text>
          </View>

          </View>
          <Image style={{width:15,height:15}} source={require('./assets/next.png')}  />
        </View>
      
      </View>

    </ScrollView>
   <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <Animated.View
            style={[
              styles.modalContainer,
              {
                transform: [
                  {
                    translateY: slideAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [500, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit Your Name</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                style={styles.modalInput}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.modalButton} onPress={handleSave}>
                  <Text style={styles.modalButtonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height:'220',
    justifyContent: 'flex-end', // Position the modal at the bottom
    alignItems: 'center',
    backgroundColor:'#f48971'
 // Overlay background
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#FC7941',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:20,
    height:96,
    width:'100%',
    backgroundColor: '#FC7941', // blue-500
  },
  basecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:20,
    height:64,
    width:'100%',
    backgroundColor: '#E8E0DD', // blue-500
  },
  preferencecard:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    padding:12,
    borderRadius:5,

    backgroundColor:'#fff',
    width:'100%'
  },
  chips:{
    flexDirection:'column',
    alignItems:'center'
  },
  cardHeading:{
    flexDirection:'column'
  },
  cardposition:{
    flexDirection:'row',
    gap:10
  },
  show:{
    width: '100%',
    height: 32,
    backgroundColor:'#fff'
  },
  bottomNavbar: {
    position: 'absolute',  // Position at the bottom
    bottom: 0,             // Stick to the bottom
    left: 0,               // Align to the left
    right: 0,              // Align to the right
    height: 80,            // Set a height for the navbar
    backgroundColor: '#FC7941', // Background color for the navbar
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  card:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    paddingHorizontal:10,
    paddingVertical:15,
    borderBottomWidth:1,
    borderBottomColor:'#BBB8B7',
    borderRadius:5,
    backgroundColor:'#fff',
    width:'100%'
  },
  Transactioncard:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    padding:10,
    borderBottomWidth:1,
    borderColor:'#D1CECC',
    borderRadius:5,
    backgroundColor:'#fff',
    width:'100%'
  },
  columncard:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:"center",
    borderRadius:5,
    backgroundColor:'#fff'
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 24, // rounded-full
  },
  button: {
    flexDirection:'row',
    gap:4,
    backgroundColor:'#53AF67',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // blue-500
    fontWeight: 'bold',
    fontSize:20
  },
  buttonoutline:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:4,
    width:60,
    height:40,
    borderWidth:1,
    borderRadius:5,
    backgroundColor:'#fff',
    borderColor:'#BEBDBC'
  }
});

export default Profile;
