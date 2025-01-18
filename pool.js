import React, { useState } from 'react';
import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';


const Pool = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState(2);
  const [poolTab, setPoolTab] = useState(101);
  const [sliderValue, setSliderValue] = useState(1);
  const formattedMoney = `${sliderValue.toFixed(2)}`;
  // Function to handle tab click
  const handleTabPress = (index) => {
    setActiveTab(index);
  };

  const handleSelectPool = (index) => {
    setPoolTab(index);
  };

  return (
    <View style={{flexDirection:'column',height:'80%',justifyContent:'center'}}>
      {/* Tabs Container */}
      <Text style={{textAlign:'center',marginBottom:10}}>Select Players</Text>
      <View style={{display:'flex',flexDirection:'column',gap:20}}>
      <View style={styles.tabContainer}>
        {/* Tab 1 */}
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
      <View>
      <Text style={{textAlign:'center',marginBottom:10}}>Select Pool Game</Text>
      <View style={styles.tabContainer}>
        {/* Tab 1 */}
        <TouchableOpacity
          style={[styles.tab, poolTab === 101 && styles.activeTab]}
          onPress={() => handleSelectPool(101)}
        >
          <Text style={[styles.tabText, poolTab === 101 && styles.activeTabText]}>
           80
          </Text>
        </TouchableOpacity>

        {/* Tab 2 */}
        <TouchableOpacity
          style={[styles.tab, poolTab === 201 && styles.activeTab]}
          onPress={() => handleSelectPool(201)}
        >
          <Text style={[styles.tabText, poolTab === 201 && styles.activeTabText]}>
            160
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, poolTab === 301 && styles.activeTab]}
          onPress={() => handleSelectPool(301)}
        >
          <Text style={[styles.tabText, poolTab === 301 && styles.activeTabText]}>
            240
          </Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>

      <View style={{flexDirection:'row',justifyContent:'center',padding:20}}>
      <View style={{display:'flex',flexDirection:'row',gap:4}}>
    <Text>Entry Fee <Text style={{fontSize:20,fontWeight:700}}>₹{formattedMoney}</Text></Text>
</View>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={1}  // Minimum value for the slider
        maximumValue={10000}  // Maximum value for the slider
        step={1}  // Steps by which the slider value increases
        value={sliderValue}  // Value of the slider
        onValueChange={(value) => setSliderValue(value)}  // Update slider value
      />
      {/* Content for active tab */}
<View style={{flexDirection:'row',justifyContent:'center',padding:10,width:350}}>
    <TouchableOpacity style={styles.button}>
    <Image style={{width:20,height:20}} source={require('./assets/cash.png')}  />
      <Text style={styles.buttonText}>ADD CASH</Text>

    </TouchableOpacity>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Container for tabs
  tabContainer: {
    flexDirection: 'row',
    justifyContent:'center'
  },
  // Basic style for each tab
  tab: {
    paddingVertical:12,
    paddingHorizontal:18,
    borderRadius:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
    borderWidth:0.2,
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

export default Pool;
