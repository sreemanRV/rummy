import React,{useEffect,useState,useRef} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,Animated,Dimensions,TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';  
import Sidebar from './sidebar';

const Rewards = () => {
   const navigation = useNavigation()
   const [activeTab, setActiveTab] = useState(0); 
      const dimAnim = useRef(new Animated.Value(0)).current; 
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
   const openProfile = ()=>{
    navigation.navigate('Profile');
   }

   const openLobby = ()=>{
    navigation.navigate('Home');
   }


   const openAddcash = ()=>{
    navigation.navigate('Addcash');
   }

   const openMission = ()=>{
    navigation.navigate('Mission');
   }
   const handleTabPress = (index) => {
    setActiveTab(index);
  };

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
      <View style={styles.chips}>
        <Text style={styles.buttonText}>Chips</Text>
        <Text style={styles.buttonText}>04</Text>
      </View>
      {/* Button */}
      <TouchableOpacity onPress={openAddcash} style={styles.button}>
      <Image style={{width:20,height:20}} source={require('./assets/cash.png')}  />
        <Text style={styles.buttonText}>ADD CASH</Text>
      </TouchableOpacity>
    </View>
    <View style={{height:'85%'}}> 
    <View style={styles.tabContainer}>
        {/* Tab 1 */}
        <TouchableOpacity
          style={[styles.tab, activeTab === 0 && styles.activeTab]}
          onPress={() => handleTabPress(0)}
        >
          <Text style={[styles.tabText, activeTab === 0 && styles.activeTabText]}>
           Bonus
          </Text>
        </TouchableOpacity>

        {/* Tab 2 */}
        <TouchableOpacity
          style={[styles.tab, activeTab === 1 && styles.activeTab]}
          onPress={() => handleTabPress(1)}
        >
          <Text style={[styles.tabText, activeTab === 1 && styles.activeTabText]}>
            Instant Cash
          </Text>
        </TouchableOpacity>

        {/* Tab 3 */}
        <TouchableOpacity
          style={[styles.tab, activeTab === 2 && styles.activeTab]}
          onPress={() => handleTabPress(2)}
        >
          <Text style={[styles.tabText, activeTab === 2 && styles.activeTabText]}>
            Tickets
          </Text>
        </TouchableOpacity>
      </View>
      {/* Content for active tab */}
      <View style={styles.contentContainer}>
        {activeTab === 0 && 
        <View style={{padding:10,flexDirection:'column',width:'100%',gap:8}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontWeight:800,fontSize:16}}>Bonus Offers</Text>
                <TouchableOpacity style={{padding:5,borderRadius:5,borderWidth:1,borderColor:'#E1E3E1'}}>
                <Text style={{color:'#53AF67'}}>How to Earn Bonus?</Text>
                </TouchableOpacity>
            </View>   
            <View style={{flexDirection:'column',padding:10,borderWidth:1,borderColor:'#C0B6B6',borderRadius:5,backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row',gap:4,paddingVertical:10}}>
                    <Text style={{fontWeight:'800',fontSize:16}}>Get up to 7500 +250 Instant Cash</Text>
                </View>
                <View style={{flexDirection:'row',gap:4,paddingVertical:10,justifyContent:'space-between',alignItems:'flex-end',borderBottomWidth:1,borderBottomColor:'#C0B6B6'}}>
                    <View style={styles.couponContainer}>
                      <Text>HSOIDF200</Text>
                    </View>
                    <View style={{flexDirection:'column',alignItems:'center',gap:2}}>
                        <Text style={{color:'#FF5154',fontWeight:800,fontSize:12}}>Expiring Soon</Text>
                    <View style={{backgroundColor:'#53AF67',paddingHorizontal:20,paddingVertical:10,borderRadius:10}}> 
                    <Text style={{color:'#fff',fontWeight:800}}>Add Cash</Text>
                    </View>
                    </View>
                
                  
                </View>
                <Text style={{fontSize:14,paddingVertical:10}}>Get up to 7500 +250 Instant Cash</Text>
                </View>
        </View>}

        {activeTab === 1 && 
        <View style={{padding:10,flexDirection:'column',width:'100%',gap:8}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontWeight:800,fontSize:16}}>Mission Offers</Text>
                <TouchableOpacity style={{padding:5,borderRadius:5,borderWidth:1,borderColor:'#E1E3E1'}}>
                <Text style={{color:'#53AF67'}}>What are Missions?</Text>
                </TouchableOpacity>
            </View>   
            <View style={{borderColor:'#D0CFCC',backgroundColor:'#DDE5ED',flexDirection:'column',padding:10,borderRadius:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center",paddingVertical:10}}>
                    <View>
                        <View>
                            <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                            <Text style={{fontWeight:800,fontSize:18}}>Win ₹10</Text>
                            <View style={{backgroundColor:'#53AF67',padding:5, borderRadius:5}}>
                                <Text style={{fontSize:8,color:'#fff',fontWeight:800}}>Only for you</Text>
                            </View>
                                </View>
                                <Text>Instant Cash</Text>
                        </View>
                       
                    </View>
                    <View style={{backgroundColor:'#EAD45B',padding:10, borderRadius:5}}>
                                <Text style={{fontWeight:800}}>Refer Now</Text>
                            </View>
                </View>
                 <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,borderWidth:1,borderColor:'#C1C8CE',borderRadius:5}}>
                    <Text style={{fontWeight:800,fontSize:12}}>Refer 1 friend & win extra ₹10</Text>
                 </View>   
                 <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,borderWidth:1,borderColor:'#C1C8CE',borderRadius:5}}>
                    <Text style={{fontSize:10}}>Pro Tip: Refer more friends to unlock new rewards!</Text>
                 </View> 
            </View>
        </View>}
      </View>
    </View>

    <View style={styles.bottomNavbar}>
        <TouchableOpacity onPress={openProfile} style={styles.chips}>
        <Image source={require('./assets/activereward.png')} style={{width:36,height:36}} />
          <Text style={[styles.bottomMenu,{color:'#FC7941'}]}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openMission} style={styles.chips}>
        <Image source={require('./assets/mission.png')} style={{width:36,height:36}} />
          <Text style={styles.bottomMenu}>Mission</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openLobby} style={styles.chips}>
        <Image source={require('./assets/lobby.png')} style={{width:36,height:36}} />
          <Text style={[styles.bottomMenu]}>Lobby</Text>
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
  }, dimBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with 50% opacity
    zIndex: 998, // Ensure it's behind the sidebar but above other content
  },
    couponContainer: {   // Green background color
        borderWidth: 2,                // Border thickness
        borderColor: '#C0B6B6',           // Border color (white in this case)
        borderStyle: 'dashed',         // Dashed border
        padding: 5,                   // Padding inside the container
        margin: 10,                    // Margin around the container
        borderRadius: 5,               // Optional: rounded corners
        alignItems: 'center',          // Center the text horizontally
        justifyContent: 'center',      // Center the text vertically
      },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FC7941', // blue-500
  },
  tabContainer: {
    flexDirection: 'row',
    padding:10,
  },
  // Basic style for each tab
  tab: {
   height:72,
    flex:1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  // Active tab style (changes background color)
  activeTab: {
    backgroundColor: '#FFD4BA',
    borderBottomWidth:2,
    borderBottomColor:'#FC7941' // Green for active tab
  },
  // Text style for each tab
  tabText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize:14 // Default text color
  },
  // Active text style (changes color when active)
  activeTabText: {
    color: '#000',
    fontWeight:800 // White text for active tab
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
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // blue-500
    fontWeight: 'bold',

  },
});

export default Rewards;
