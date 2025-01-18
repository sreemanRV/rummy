import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,ScrollView } from 'react-native';
import Section from './section';
import { useNavigation } from '@react-navigation/native';

const Wallet = () => {

  const navigation = useNavigation();

  const EditProfile = ()=>{
    navigation.navigate('EditProfile')
  }

  const openTransaction = ()=>{
    navigation.navigate('Transaction')
  }
  return (
    <View style={{flex:1}}>
    <View style={styles.show}>

    </View>
    <View style={styles.container}>
      {/* Profile Image */}
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Image source={require('./assets/profile.png')} style={styles.profileImage} />
      <View>
        <Text style={styles.buttonText}>Sree</Text>
        <Text style={{fontSize:12,color:'#E8E0DD'}}>1234</Text>
      </View>
      </View>

      {/* Button */}
      <TouchableOpacity onPress={EditProfile} style={styles.button}>
      <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
        <Text style={{color:'#fff',fontWeight:800}}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
    <ScrollView style={{backgroundColor:'#E8E0DD',flex:1}}>
      <View style={{paddingHorizontal:20,paddingVertical:10,flexDirection:'column',gap:20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{fontWeight:800,fontSize:16}}>My Wallet</Text>
          <TouchableOpacity style={styles.button}>
        <Text style={{color:'#fff',fontWeight:800}}>Play Now</Text>
      </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Deposit balance</Text>
          <Text>₹0</Text>
          </View>

          </View>
          <View>
            <Text>Reload</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Deposit balance</Text>
          <Text>₹0</Text>
          </View>

          </View>
          <View style={styles.buttonoutline}>
            <Text>Learn more</Text>
            <Image style={{width:15,height:15}} source={require('./assets/next.png')}  />
          </View>
        </View>
        <View style={styles.columncard}>
          <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center',backgroundColor:'#3BEBDBC',padding:10}}>
            <View>
          <Text>Total balance</Text>
          <Text>₹0</Text>
          </View>
          <View>
            <Text>Deposit Limit</Text>
          </View>
          </View>
          <View style={styles.card}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Deposit balance</Text>
          <Text>₹0</Text>
          </View>

          </View>
          <TouchableOpacity style={styles.buttonoutline}>
            <Text>Learn more</Text>
            <Image style={{width:15,height:15}} source={require('./assets/next.png')}  />
          </TouchableOpacity>
        </View>        <View style={styles.card}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Deposit balance</Text>
          <Text>₹0</Text>
          </View>

          </View>
          <TouchableOpacity style={styles.buttonoutline}>
            <Text>Learn more</Text>
            <Image style={{width:15,height:15}} source={require('./assets/next.png')}  />
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Deposit balance</Text>
          <Text>₹0</Text>
          </View>

          </View>
          <View style={styles.buttonoutline}>
            <Text>Redeem</Text>
            <Image style={{width:15,height:15}} source={require('./assets/next.png')}  />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Deposit balance</Text>
          <Text>₹0</Text>
          </View>

          </View>
          <TouchableOpacity style={styles.buttonoutline}>
            <Text>Learn more</Text>
            <Image style={{width:15,height:15}} source={require('./assets/next.png')}  />
          </TouchableOpacity>
        </View>
        
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,paddingVertical:10}}>
          <Text style={{fontWeight:800,fontSize:16}}>Transaction History</Text>
         <TouchableOpacity onPress={openTransaction}>
         <Text style={{fontSize:12}}>View all</Text>
          </TouchableOpacity> 
        </View>
        <View style={{paddingHorizontal:20,marginBottom:20}}>
        <View style={styles.Transactioncard}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Other Transaction</Text>
          <Text>08 Dec,2024, 12:17 AM</Text>
          </View>

          </View>
          <View>
            <Text>-₹5.00</Text>
          </View>
        </View>
        <View style={styles.Transactioncard}>
          <View style={styles.cardposition}>
          <Image style={{width:20,height:20}} source={require('./assets/edit.png')}  />
          <View style={styles.cardHeading}>
          <Text>Other Transaction</Text>
          <Text>08 Dec,2024, 12:04 AM</Text>
          </View>

          </View>
          <View>
            <Text>-₹15.00</Text>
          </View>
        </View>
        </View>

    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:20,
    height:96,
    backgroundColor: '#FC7941', // blue-500
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
  card:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    padding:10,
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
    width: 72,
    height: 72,
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
    gap:4,
    padding:10,
    borderWidth:1,
    borderRadius:5,
    backgroundColor:'#fff',
    borderColor:'#BEBDBC'
  }
});

export default Wallet;
