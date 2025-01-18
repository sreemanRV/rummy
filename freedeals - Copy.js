import React, { useState } from 'react';
import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';


const FreeDeals = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState(2);
  const [sliderValue, setSliderValue] = useState(1);
  const formattedMoney = `${sliderValue.toFixed(2)}`;
  // Function to handle tab click
  const handleTabPress = (index) => {
    setActiveTab(index);
  };

  return (
    <View style={{flexDirection:'column',height:'80%',justifyContent:'center',gap:20}}>
      {/* Tabs Container */}
      <View>
      <Text style={{textAlign:'center',marginBottom:10}}>Select Players</Text>
        <View style={styles.tabContainer}>
          <View style={{flexDirection:'row',backgroundColor:'#fff',borderRadius:8}}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 2 && styles.activeTab]}
            onPress={() => handleTabPress(2)}
          >
            <Text style={[styles.tabText, activeTab === 2 && styles.activeTabText]}>
              2
            </Text>
          </TouchableOpacity>

          {/* Tab 2 */}
          <TouchableOpacity
            style={[styles.tab, activeTab === 6 && styles.activeTab]}
            onPress={() => handleTabPress(6)}
          >
            <Text style={[styles.tabText, activeTab === 6 && styles.activeTabText]}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 9 && styles.activeTab]}
            onPress={() => handleTabPress(9)}
          >
            <Text style={[styles.tabText, activeTab === 9 && styles.activeTabText]}>
              9
            </Text>
          </TouchableOpacity>
          </View>
          {/* Tab 1 */}


          {/* Tab 3 */}
        </View>
      </View>

      {/* Content for active tab */}
<View style={{flexDirection:'row',justifyContent:'center',padding:10,width:320}}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>PLAY NOW</Text>

    </TouchableOpacity>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Container for tabs
  tabContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    borderRadius:8
  },
  // Basic style for each tab
  tab: {
    paddingVertical:18,
    paddingHorizontal:24,
    borderRadius:8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',

  },
  // Active tab style (changes background color)
  activeTab: {
    backgroundColor: '#FC7941', // Green for active tab
  },
  // Text style for each tab
  tabText: {
    fontWeight:'black',
    color: '#000',
    fontSize:14 // Default text color
  },
  // Active text style (changes color when active)
  activeTabText: {
    color: '#fff',
    fontWeight:900, // White text for active tab
  },
  // Content area for active tab
  contentContainer: {
    padding: 16,
  },
  button: {
    flexDirection:'row',
    gap:4,
    backgroundColor:'#53AF67',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff', // blue-500
    fontWeight: 'bold',

  },
});

export default FreeDeals;
