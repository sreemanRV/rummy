import React, { useState,useRef } from "react"; // Add useState here
import Navbar from "./navbar";
import { View, Text, TouchableOpacity, Image, StyleSheet,Animated,Dimensions,TouchableWithoutFeedback } from 'react-native';
import Section from "./section";
import { useNavigation } from "@react-navigation/native";
import Sidebar from "./sidebar";

const Mission = () => {
  const navigation = useNavigation();

  // Add activeTab state using useState
  const [activeTab, setActiveTab] = useState(1); // Default active tab is 0
   const dimAnim = useRef(new Animated.Value(0)).current; 
  // Function to handle tab clicks and update activeTab state
  const handleTabPress = (index) => {
    setActiveTab(index);
  };

  const openLobby = () => {
    navigation.navigate('Home');
  };

  const openMission = () => {
    navigation.navigate('Home');
  };

  const openRewards = () => {
    navigation.navigate('Rewards');
  };
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
   const [dimVisible, setDimVisible] = useState(false);
   const [sidebarVisible, setSidebarVisible] = useState(false);
   const sidebarAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
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
      <View style={styles.banner}>
      </View>
      <View style={{ height: '72%' }}>
        <View style={styles.tabContainer}>
          <View style={{flexDirection:'row',backgroundColor:'#fff',borderRadius:8,backgroundColor:'#FC7941'}}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 0 && styles.activeTab]}
            onPress={() => handleTabPress(0)}
          >
            <Text style={[styles.tabText, activeTab === 0 && styles.activeTabText]}>
              Daily Challenges
            </Text>
          </TouchableOpacity>

          {/* Tab 2 */}
          <TouchableOpacity
            style={[styles.tab, activeTab === 1 && styles.activeTab]}
            onPress={() => handleTabPress(1)}
          >
            <Text style={[styles.tabText, activeTab === 1 && styles.activeTabText]}>
              Missions
            </Text>
          </TouchableOpacity>
          </View>
          {/* Tab 1 */}


          {/* Tab 3 */}
        </View>

        {/* Content for active tab */}
        <View style={styles.contentContainer}>     
          {activeTab === 1 && <View style={{padding:10}}>
            <Text style={{fontWeight:800}}>Not started</Text>
            <View style={{borderColor:'#D0CFCC',backgroundColor:'#fff',flexDirection:'column',padding:10,borderRadius:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center",paddingVertical:10}}>
                    <View>
                        <View>
                            <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                            <Text style={{fontWeight:800,fontSize:20}}>Win ₹10</Text>
                            <View style={{backgroundColor:'#53AF67',padding:5, borderRadius:5}}>
                                <Text style={{fontSize:10,color:'#fff',fontWeight:800}}>Only for you</Text>
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
                    <Text style={{fontWeight:800}}>Refer 1 friend & win extra ₹10</Text>
                 </View>   
                 <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,borderWidth:1,borderColor:'#C1C8CE',borderRadius:5}}>
                    <Text style={{fontSize:12}}>Pro Tip: Refer more friends to unlock new rewards!</Text>
                 </View> 
            </View>
            </View>}
        </View>
      </View>

      <View style={styles.bottomNavbar}>
        <TouchableOpacity onPress={openRewards} style={styles.chips}>
          <Image source={require('./assets/reward.png')} style={{ width: 36, height: 36 }} />
          <Text style={styles.bottomMenu}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openMission} style={styles.chips}>
          <Image source={require('./assets/activemission.png')} style={{ width: 36, height: 36 }} />
          <Text style={[styles.bottomMenu, { color: '#FC7941' }]}>Mission</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openLobby} style={styles.chips}>
          <Image source={require('./assets/lobby.png')} style={{ width: 36, height: 36 }} />
          <Text style={styles.bottomMenu}>Lobby</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleSidebar} style={styles.chips}>
          <Image source={require('./assets/iconmenu.png')} style={{ width: 36, height: 36 }} />
          <Text style={styles.bottomMenu}>Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  }, dimBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with 50% opacity
    zIndex: 998, // Ensure it's behind the sidebar but above other content
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FC7941', // blue-500
  },
  tab: {
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    // borderRadius:8
  },
  // Active tab style (changes background color)
  activeTab: {
    backgroundColor: '#FC7941',
    borderRadius:20
     // Green for active tab
  },
  // Text style for each tab
  tabText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 14 // Default text color
  },
  // Active text style (changes color when active)
  activeTabText: {
    color: '#fff',
    fontWeight: 800 // White text for active tab
  },
  banner: {
    height: 180,
    backgroundColor: '#FC7941'
  },
  bottomNavbar: {
    position: 'absolute',  // Position at the bottom
    bottom: 0,             // Stick to the bottom
    left: 0,               // Align to the left
    right: 0,              // Align to the right
    // Set a height for the navbar
    backgroundColor: '#fff', // Background color for the navbar
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#9D9895',
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  bottomMenu: {
    fontSize: 14,
    fontWeight: 800
  },
  chips: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  show: {
    width: '100%',
    height: 32,
    backgroundColor: '#fff'
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24, // rounded-full
  },
  button: {
    flexDirection: 'row',
    gap: 4,
    backgroundColor: '#53AF67',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // blue-500
    fontWeight: 'bold',
  },
});

export default Mission;
