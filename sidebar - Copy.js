import React,{useState} from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet,Animated,Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Sidebar = ()=>{
      const [walletsection,showWalletSection] = useState(false)
      const [rewardsection,showRewardSection] = useState(false)
      const [helpsection,showHelpSection] = useState(false)
      const navigation = useNavigation()
    const toggleWalletSection = ()=>{
        showWalletSection(!walletsection)
       }
       const toggleRewardSection = ()=>{
        showRewardSection(!rewardsection)
       }
       const toggleHelpSection = ()=>{
        showHelpSection(!helpsection)
       }
       const openProfile = ()=>{
        navigation.navigate('Profile');
       }
    return(
<Animated.View>
  <View style={styles.sidebarContent}>
    <View style={{backgroundColor:'#FC7941', height:80, width:'100%', padding:10, flexDirection:'row', alignItems:'center'}}>
      <TouchableOpacity onPress={openProfile}>
      <Image source={require('./assets/profile.png')} style={{height:60, width:60}} />
      </TouchableOpacity>

      <View>
        <Text style={{color:'#fff', fontSize:16, fontWeight:800}}>Jack durden</Text>
        <View style={{flexDirection:'row', gap:16}}>
          <View style={{flexDirection:'row', alignItems:'center', gap:4}}>
            <Image style={{width:20, height:20}} source={require('./assets/trophy.png')}  />
            <View>
              <Text style={styles.headingtext}>Cash</Text>
              <Text style={{color:'#fff', fontWeight:800, fontSize:10}}>400</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', gap:4}}>
            <Image style={{width:20, height:20}} source={require('./assets/trophy.png')}  />
            <View>
              <Text style={styles.headingtext}>Cash</Text>
              <Text style={{color:'#fff', fontWeight:800, fontSize:10}}>400</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    
    {/* Scrollable content inside sidebar */}

      <View style={{padding:10, width:'100%'}}>
        <TouchableOpacity style={{ flexDirection:'row', gap:20, padding:10, borderWidth:2, borderRadius:8, borderColor:'#EEEEEE'}}>
          <Image style={{width:20, height:20}} source={require('./assets/trophy.png')}  />
          <Text>Complete your KYC</Text>
        </TouchableOpacity>
      </View> 

      <View style={{width:'100%'}}>
        <TouchableOpacity onPress={toggleWalletSection} style={{flexDirection:'row', justifyContent:'space-between', padding:15, alignItems:'center', borderBottomColor:'#E4DFDF', borderBottomWidth:1}}>
          <View>
            <Text style={{fontWeight:800, fontSize:12}}>Wallet and Withdrawal</Text>
            <Text style={{color:'#A9A8A8', fontSize:12}}>Manage Transactions</Text>
          </View>
          <Image style={{width:20, height:20}} source={require('./assets/down.png')}  />
        </TouchableOpacity>

        {walletsection &&     
          <View>
            {/* Wallet Section Details */}
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', padding:15, alignItems:'center', borderBottomColor:'#E4DFDF', borderBottomWidth:1}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#A9A8A8', fontSize:12}}>Manage Transactions</Text>
              </View>
              <Image style={{width:10, height:10}} source={require('./assets/next.png')}  />
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', padding:15, alignItems:'center', borderBottomColor:'#E4DFDF', borderBottomWidth:1}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#A9A8A8', fontSize:12}}>Manage Transactions</Text>
              </View>
              <Image style={{width:10, height:10}} source={require('./assets/next.png')}  />
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', padding:15, alignItems:'center', borderBottomColor:'#E4DFDF', borderBottomWidth:1}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#A9A8A8', fontSize:12}}>Manage Transactions</Text>
              </View>
              <Image style={{width:10, height:10}} source={require('./assets/next.png')}  />
            </TouchableOpacity>
            {/* Repeat wallet items as needed */}
          </View>
        }

        {/* Other buttons */}
        <TouchableOpacity onPress={toggleRewardSection}  style={{flexDirection:'row', justifyContent:'space-between', padding:15, alignItems:'center', borderBottomColor:'#E4DFDF', borderBottomWidth:1}}>
          <View>
            <Text style={{fontWeight:800, fontSize:12}}>My Rewards</Text>
            <Text style={{color:'#A9A8A8', fontSize:12}}>Manage Transactions</Text>
          </View>
          <Image style={{width:20, height:20}} source={require('./assets/down.png')}  />
        </TouchableOpacity>
        {rewardsection &&     
          <View>
            {/* Wallet Section Details */}
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', padding:15, alignItems:'center', borderBottomColor:'#E4DFDF', borderBottomWidth:1}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#A9A8A8', fontSize:12}}>Reward Store</Text>
              </View>
              <Image style={{width:10, height:10}} source={require('./assets/next.png')}  />
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', padding:15, alignItems:'center', borderBottomColor:'#E4DFDF', borderBottomWidth:1}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#A9A8A8', fontSize:12}}>Tickets</Text>
              </View>
              <Image style={{width:10, height:10}} source={require('./assets/next.png')}  />
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', padding:15, alignItems:'center', borderBottomColor:'#E4DFDF', borderBottomWidth:1}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#A9A8A8', fontSize:12}}>Loyalty Points </Text>
              </View>
              <Image style={{width:10, height:10}} source={require('./assets/next.png')}  />
            </TouchableOpacity>
            {/* Repeat wallet items as needed */}
          </View>
        }
        <TouchableOpacity onPress={toggleHelpSection}  style={{flexDirection:'row', justifyContent:'space-between', padding:15, alignItems:'center', borderBottomColor:'#E4DFDF', borderBottomWidth:1}}>
          <View>
            <Text style={{fontWeight:800, fontSize:12}}>Help</Text>
            <Text style={{color:'#A9A8A8', fontSize:12}}>Manage Transactions</Text>
          </View>
          <Image style={{width:20, height:20}} source={require('./assets/down.png')}  />
        </TouchableOpacity>
        {helpsection &&     
          <View>
            {/* Wallet Section Details */}
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', padding:15, alignItems:'center', borderBottomColor:'#E4DFDF', borderBottomWidth:1}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#A9A8A8', fontSize:12}}>Chat with Us</Text>
              </View>
              <Image style={{width:10, height:10}} source={require('./assets/next.png')}  />
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', padding:15, alignItems:'center', borderBottomColor:'#E4DFDF', borderBottomWidth:1}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#A9A8A8', fontSize:12}}>Contact Us</Text>
              </View>
              <Image style={{width:10, height:10}} source={require('./assets/next.png')}  />
            </TouchableOpacity>

            {/* Repeat wallet items as needed */}
          </View>
        }
      </View>

  </View>
</Animated.View>
    )
}

export default Sidebar;

const styles = StyleSheet.create({
    headingtext:{
      fontSize:12,
      color:'#EEEBEB'
    },  
    sidebar: {
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor:'#000',
      width: Dimensions.get('window').width * 0.95, // Sidebar takes up 75% of the screen width
      height: '100%',
      marginTop:30, // Dark background for the sidebar
      flexDirection:'row',
      justifyContent: 'flex-end', // Align content from the top
      zIndex: 999, // Ensure it appears above other components
    },
    sidebarContent: {
      flex: 1,
      alignItems: 'flex-start',
      backgroundColor:'#fff',
      width: Dimensions.get('window').width * 0.70,
    },
      bottomNavbar: {
      position: 'absolute',  // Position at the bottom
      bottom: 0,             // Stick to the bottom
      left: 0,               // Align to the left
      right: 0,              // Align to the right
      backgroundColor: '#fff', // Background color for the navbar
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth:1,
      borderTopColor:'#9D9895',
      paddingHorizontal: 16,
      paddingVertical:10
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#FC7941', // blue-500
    },
    
    bottomNavbar: {
      position: 'absolute',  // Position at the bottom
      bottom: 0,             // Stick to the bottom
      left: 0,               // Align to the left
      right: 0,              // Align to the right
      backgroundColor: '#fff', // Background color for the navbar
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth:1,
      borderTopColor:'#9D9895',
      paddingHorizontal: 16,
      paddingVertical:10
    },  dimBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with 50% opacity
      zIndex: 998, // Ensure it's behind the sidebar but above other content
    },
    bottomMenu:{
     fontSize:14,
     fontWeight:800
    },
    chips:{
      flexDirection:'column',
      alignItems:'center',
    },
    show:{
      width: '100%',
      height: 32,
      backgroundColor:'#fff'
    },
    profileImage: {
      width: 48,
      height: 48,
      borderRadius: 24, // rounded-full
    },
    button: {
      flexDirection:'row',
      gap:4,
      backgroundColor:'#53AF67',
      paddingVertical: 8,
      paddingHorizontal: 8,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff', // blue-500
      fontWeight: 'bold',
  
    },
  });
  