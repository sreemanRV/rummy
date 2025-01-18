import React,{useState}from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Animated,Dimensions,TouchableWithoutFeedback } from 'react-native';

const PrivateRoom = ()=>{

  const [activeTab, setActiveTab] = useState(1); // Default active tab is 0
  const [poolTab, setPoolTab] = useState(101);

  const handleSelectPool = (index) => {
    setPoolTab(index);
  };

      const [amount, setAmount] = useState("0"); // Default value is "0"
  
         // Update the value while keeping the "$" sign fixed
         const handleAmountChange = (text) => {
          // Remove the "$" symbol, and only keep numbers
          let numericValue = text.replace(/[^0-9]/g, ''); 
          
          // If there's no numeric value, set it back to "0"
          if (numericValue === "") {
            numericValue = "0";
          }
          
          // If the value starts with "0", remove the leading zero
          if (numericValue.startsWith("0") && numericValue.length > 1) {
            numericValue = numericValue.substring(1); // Remove leading 0
          }
          
          setAmount(numericValue); // Update the state with the new value
        };
  
const handleTabPress = (index) => {
  setActiveTab(index);
};

    const handleSubmit = async (e) => {
      const playerId = await SecureStore.getItemAsync('playerId');
    const payload = {
      "roomSize" : 2,
      "roomType" : "Point",
      "gameMode" : "Practice",
      "gameStatus" : "Waiting",
      "issuedPoint" : 80,
      "totalRounds": 1,
      "entryType" : "Cash",
      "entryPrice" : amount,
      "playerId1": playerId,
      "visibility": "Private",
      "pointValue" : 0.0
  }
      try {
        // const token = process.env.REACT_APP_GITHUB_TOKEN;
        const response = await fetch('https://1fd3-2401-4900-8824-49f6-2dcc-b687-e521-9e6f.ngrok-free.app/api/user/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(payload),
        });
  
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        if (response.ok) {
          const data = await response.json();
          console.log('room created');
          // Navigate to the home screen
          navigation.navigate('Home');
      } else {
          setError('Invalid credentials. Please try again.');
          }
        }
       catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  

    return(
        <View>
                  <View style={styles.tabContainer}>
                    <View style={{flexDirection:'row',backgroundColor:'#fff',borderRadius:8,backgroundColor:'#FC7941'}}>
                    <TouchableOpacity
                      style={[styles.tab, activeTab === 0 && styles.activeTab]}
                      onPress={() => handleTabPress(0)}
                    >
                      <Text style={[styles.tabText, activeTab === 0 && styles.activeTabText]}>
                        Free
                      </Text>
                    </TouchableOpacity>
                    {/* Tab 2 */}
                    <TouchableOpacity
                      style={[styles.tab, activeTab === 1 && styles.activeTab]}
                      onPress={() => handleTabPress(1)}
                    >
                      <Text style={[styles.tabText, activeTab === 1 && styles.activeTabText]}>
                        Cash
                      </Text>
                    </TouchableOpacity>
                    </View>
                    <View></View>
                    {/* Tab 3 */}
                  </View>
                  {activeTab === 0&&      <View style={{flexDirection:'column',gap:50}}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                    <Text style={{textAlign:'center'}}>Select Amount</Text>
                    <TextInput
            label="Amount"
            mode="outlined"
            keyboardType="numeric"
            maxLength={3}
            value={`₹${amount}`}
            onChangeText={handleAmountChange}
            style={[styles.inputField, { textAlign: 'center' }]} 
            theme={{
              colors: {
                primary: '#000', // Border color when active (focus)
                underlineColor: 'transparent', // Disable underline
                background: '#fff', // Background color
              },
            }}
          />
                      </View>
                  <View style={{flexDirection:'column',gap:10}}>
                  <Text style={{textAlign:'center'}}>Select Game</Text>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                          {/* Tab 1 */}
                          <TouchableOpacity
                            style={[styles.tabs, poolTab === 101 && styles.activeTab]}
                            onPress={() => handleSelectPool(101)}
                          >
                            <Text style={[styles.tabText, poolTab === 101 && styles.activeTabText]}>
                             80
                            </Text>
                          </TouchableOpacity>
                  
                          {/* Tab 2 */}
                          <TouchableOpacity
                            style={[styles.tabs, poolTab === 201 && styles.activeTab]}
                            onPress={() => handleSelectPool(201)}
                          >
                            <Text style={[styles.tabText, poolTab === 201 && styles.activeTabText]}>
                              160
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[styles.tabs, poolTab === 301 && styles.activeTab]}
                            onPress={() => handleSelectPool(301)}
                          >
                            <Text style={[styles.tabText, poolTab === 301 && styles.activeTabText]}>
                              240
                            </Text>
                          </TouchableOpacity>
                        </View>
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'center'}} >
                  <TouchableOpacity style={styles.button}><Text style={{color:'#fff'}}>Create Room</Text></TouchableOpacity>
                  </View>
                  </View>}
            {activeTab === 1&&      <View style={{flexDirection:'column',gap:50}}>
                  <View style={{flexDirection:'column',gap:10}}>
                  <Text style={{textAlign:'center'}}>Select Game</Text>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                          {/* Tab 1 */}
                          <TouchableOpacity
                            style={[styles.tabs, poolTab === 101 && styles.activeTab]}
                            onPress={() => handleSelectPool(101)}
                          >
                            <Text style={[styles.tabText, poolTab === 101 && styles.activeTabText]}>
                             80
                            </Text>
                          </TouchableOpacity>
                  
                          {/* Tab 2 */}
                          <TouchableOpacity
                            style={[styles.tabs, poolTab === 201 && styles.activeTab]}
                            onPress={() => handleSelectPool(201)}
                          >
                            <Text style={[styles.tabText, poolTab === 201 && styles.activeTabText]}>
                              160
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[styles.tabs, poolTab === 301 && styles.activeTab]}
                            onPress={() => handleSelectPool(301)}
                          >
                            <Text style={[styles.tabText, poolTab === 301 && styles.activeTabText]}>
                              240
                            </Text>
                          </TouchableOpacity>
                        </View>
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'center'}} >
                  <TouchableOpacity onPress={handleSubmit} style={styles.button}><Text style={{color:'#fff'}}>Create Room</Text></TouchableOpacity>
                  </View>
                  </View>}
        </View>
    )
}

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
    zIndex: 999, 
  }, 
  tabs: {
    paddingVertical:18,
    paddingHorizontal:24,
    borderRadius:8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',

  },
  inputField:{
    width:'50%',
    borderBottomWidth:1,
    borderColor:'#000'
    },
  dimBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with 50% opacity
    zIndex: 998,
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 10,
    width:'100%',
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
    width:'50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius:8
  },
  activeTab: {
    backgroundColor: '#FC7941',
     // Green for active tab
  },
  tabText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 14 // Default text color
  },
 
  activeTabText: {
    color: '#fff',
    fontWeight: 800 // White text for active tab
  },
  banner: {
    height: 180,
    backgroundColor: '#FC7941'
  },
  bottomNavbar: {
    position: 'absolute', 
    bottom: 0,             // Stick to the bottom
    left: 0,     
    right: 0,              // Align to the right

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
    justifyContent:'center',
    width:120,
    backgroundColor: '#53AF67',
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // blue-500
    fontWeight: 'bold',
  },
});

export default PrivateRoom;
