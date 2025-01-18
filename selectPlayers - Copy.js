import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,Switch } from 'react-native';
import Slider from '@react-native-community/slider';

const Selectplayers = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState(2);
  const [sliderValue, setSliderValue] = useState(1);
  const formattedMoney = `${sliderValue.toFixed(2)}`;
  const [isDarwinProtectEnabled, setIsDarwinProtectEnabled] = React.useState(false);

  const toggleDarwinProtect = () => setIsDarwinProtectEnabled(previousState => !previousState);
  // Custom step values for the slider
  const customSteps = [1, 5, 10, 20, 50, 100, 250, 500, 1000];
  
  const handleTabPress = (id)=>{
    setActiveTab(id)
  }
  // Function to find the nearest step
  const findNearestStep = (value) => {
    let nearestStep = customSteps[0];
    for (let i = 1; i < customSteps.length; i++) {
      if (Math.abs(customSteps[i] - value) < Math.abs(nearestStep - value)) {
        nearestStep = customSteps[i];
      }
    }
    return nearestStep;
  };

  // Function to handle slider change
  const handleSliderChange = (value) => {
    // Convert the slider value to the nearest custom step
    const mappedValue = findNearestStep(value);
    setSliderValue(mappedValue);
  };

  // Function to get marker position on the slider track
  const getMarkerPosition = (step) => {
    // Calculate the position of each step on a scale of 0 to 1
    return (customSteps.indexOf(step) / (customSteps.length - 1)) * 100;
  };

  return (
    <View style={{ flexDirection: 'column', height: '80%', justifyContent: 'center' }}>
      {/* Tabs Container */}
      <Text style={{ textAlign: 'center', marginBottom: 10 }}>Select Players</Text>
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

      {/* Point Value & Entry Fee */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
        <View style={{ flexDirection: 'row', width: '200', gap: 4 }}>
          <Text style={{ paddingRight: 20 }}>Point value <Text style={{ fontSize: 20, fontWeight: '700' }}>₹ 1</Text></Text>
          <Text>Entry Fee <Text style={{ fontSize: 20, fontWeight: '700' }}>₹{formattedMoney}</Text></Text>
        </View>
      </View>

      {/* Slider with Custom Steps */}
      <View style={{ position: 'relative', alignItems: 'center' }}>
        {/* Slider track with markers */}
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={1000} // The max slider value should correspond to the last custom step
          value={sliderValue}
          onValueChange={handleSliderChange}
          step={1} // Smoothing the movement but we'll handle mapping to custom steps
        />

        {/* Custom markers for each step */}
        {/* <View style={styles.markersContainer}>
          {customSteps.map((step, index) => {
            const markerPosition = getMarkerPosition(step);
            return (
              <View
                key={index}
                style={[styles.marker, { left: `${markerPosition}%` }]}
              />
            );
          })}
        </View> */}

      </View>

      {/* Button */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10, width: 350 }}>
        <TouchableOpacity style={styles.button}>
          <Image style={{ width: 20, height: 20 }} source={require('./assets/cash.png')} />
          <Text style={styles.buttonText}>ADD CASH</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius:8,
  },
  tab: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius:8,

  },
  activeTab: {
    backgroundColor: '#FC7941', // Green for active tab
  },
  tabText: {
    fontWeight: 'black',
    color: '#000',
    fontSize: 14, // Default text color
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 900, // White text for active tab
  },
  slider: {
    width: '80%',
    height: 40,
  },
  markersContainer: {
    position: 'absolute',
    top: -8, // Adjust the position of markers above the slider
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  marker: {
    width: 6,
    height: 6,
    backgroundColor: '#53AF67', // Color of the marker
    borderRadius: 3,
    position: 'absolute',
    top: 15, // Positioning markers at a reasonable place above the slider
  },
  button: {
    flexDirection: 'row',
    gap: 4,
    backgroundColor: '#53AF67',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff', // blue-500
    fontWeight: 'bold',
  },
});

export default Selectplayers;
