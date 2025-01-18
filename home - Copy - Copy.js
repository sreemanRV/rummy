import React,{useEffect,useState, useRef} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,Animated,Dimensions,TouchableWithoutFeedback } from 'react-native';
import Section from './section';
import { useNavigation } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';  
import { ScrollView } from 'react-native-web';
import Sidebar from './sidebar';
import * as SecureStore from 'expo-secure-store';

const Home = () => {
  const [walletsection,showWalletSection] = useState(false)
  const [rewardsection,showRewardSection] = useState(false)
  const [helpsection,showHelpSection] = useState(false)
   const navigation = useNavigation()
   const dimAnim = useRef(new Animated.Value(0)).current; 
   const openProfile = ()=>{
    navigation.navigate('Profile');
   }

   const openKyc = ()=>{
    navigation.navigate('Kyc');
   }
   const openLobby = ()=>{
    navigation.navigate('Home');
   }


        const gettoken = SecureStore.getItemAsync('playerId');
   const toggleWalletSection = ()=>{
    showWalletSection(!walletsection)
   }
   const toggleRewardSection = ()=>{
    showRewardSection(!rewardsection)
   }
   const toggleHelpSection = ()=>{
    showHelpSection(!helpsection)
   }
   const openRewards = ()=>{
    navigation.navigate('Rewards');
   }
   const [dimVisible, setDimVisible] = useState(false);
   const [sidebarVisible, setSidebarVisible] = useState(false);
   const sidebarAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
      const toggleSidebar = () => {
       if (sidebarVisible) {
         // Close the sidebar
         Animated.timing(sidebarAnim, {
           toValue: Dimensions.get('window').width, // Move sidebar off-screen
           duration: 300,
           useNativeDriver: true,
         }).start();
         // Fade out the dim background
         Animated.timing(dimAnim, {
           toValue: 0, // Fade out the dim background
           duration: 300,
           useNativeDriver: true,
         }).start();
         setDimVisible(false);
       } else {
         // Open the sidebar
         Animated.timing(sidebarAnim, {
           toValue: 0, // Slide sidebar in
           duration: 300,
           useNativeDriver: true,
         }).start();
         // Fade in the dim background
         Animated.timing(dimAnim, {
           toValue: 0.5, // Dim the background to 50% opacity
           duration: 300,
           useNativeDriver: true,
         }).start();
         setDimVisible(true);
       }
   
       setSidebarVisible(!sidebarVisible); // Toggle the state
     };
   const openMission = ()=>{
    navigation.navigate('Mission');
   }
   useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);
  return (
    <View style={{position:'relative'}}>
    <View style={styles.show}>

    </View>
    {dimVisible && (
        <TouchableWithoutFeedback onPress={toggleSidebar}>
          <Animated.View
            style={[styles.dimBackground, { opacity: dimAnim }]} // Apply the animated opacity
          />
        </TouchableWithoutFeedback>
      )}
<Animated.View
  style={[
    styles.sidebar,
    {
      transform: [{ translateX: sidebarAnim }], // Apply sliding animation
    },
  ]}
>
  <Sidebar />
</Animated.View>
    <View style={styles.container}>
      {/* Profile Image */}
      <TouchableOpacity onPress={openProfile}>
      <Image source={require('./assets/profile.png')} style={styles.profileImage} />
      </TouchableOpacity>
      {/* <View style={styles.chips}>
        <Text style={styles.buttonText}>Chips</Text>
        <Text style={styles.buttonText}>04</Text>
      </View> */}
      {/* Button */}
      <TouchableOpacity onPress={openKyc} style={styles.button}>
      <Image style={{width:20,height:20}} source={require('./assets/cash.png')}  />
        <Text style={styles.buttonText}>ADD CASH</Text>
      </TouchableOpacity>
    </View>
    <View style={{height:'87%'}}> 
    <Section />
    </View>

    <View style={styles.bottomNavbar}>
        <TouchableOpacity onPress={openRewards} style={styles.chips}>
        <Image source={require('./assets/reward.png')} style={{width:36,height:36}} />
        <Text style={styles.bottomMenu}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openMission} style={styles.chips}>
        <Image source={require('./assets/mission.png')} style={{width:36,height:36}} />
          <Text style={styles.bottomMenu}>Mission</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openLobby} style={styles.chips}>
        <Image source={require('./assets/activelobby.png')} style={{width:36,height:36}} />
          <Text style={[styles.bottomMenu,{color:'#FC7941'}]}>Lobby</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleSidebar} style={styles.chips}>
        <Image source={require('./assets/iconmenu.png')} style={{width:36,height:36}} />
          <Text style={styles.bottomMenu}>Menu</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  headingtext:{
    fontSize:12,
    color:'#EEEBEB'
  },  
  sidebar: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor:'#fff',
    width: Dimensions.get('window').width * 0.70, // Sidebar takes up 75% of the screen width
    height: '100%',
    marginTop:30, // Dark background for the sidebar
    flexDirection:'row',
    justifyContent: 'flex-end', // Align content from the top
    zIndex: 999, // Ensure it appears above other components
  },
  sidebarContent: {
    flex: 1,
    alignItems: 'flex-start',
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

export default Home;
