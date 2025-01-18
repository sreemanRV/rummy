import React,{useState,useRef,useEffect} from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Modal, Animated,Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button } from 'react-native-paper';

const Addcash = () => {
    const navigation = useNavigation()
    const [activeTab, setActiveTab] = useState(0); 
       const dimAnim = useRef(new Animated.Value(0)).current; 
       const [dimVisible, setDimVisible] = useState(false);
       const [sidebarVisible, setSidebarVisible] = useState(false);
       const sidebarAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
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
 
   return (
     <View style={{position:'relative'}}>
     <View style={styles.show}>
 
     </View>

     <View style={styles.container}>
       {/* Profile Image */}
    <Image source={require('./assets/back.png')} style={styles.profileImage} />
    <Text style={{color:'#fff',fontSize:16,fontWeight:800}}>Add Cash</Text>
     </View>
     <View style={{height:'85%',flexDirection:'column',gap:20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:20}}>
            <View style={{flexDirection:'row',gap:10}}>
            <Image source={require('./assets/wallet.png')} style={styles.profileImage} />
            <Text>Current Balance</Text>
            </View>

            <Text>₹0</Text>
        </View>
     <View style={{paddingHorizontal:20,flexDirection:'column',gap:10,backgroundColor:'#fff'}}>
        <Text style={{fontSize:16,fontWeight:600}}>Amount to add</Text>
        <View style={styles.inputContainer}>
        <TextInput
            label="Amount"
            mode="outlined"
            keyboardType="numeric"
            maxLength={6}
            value={`₹${amount}`}
            onChangeText={handleAmountChange}
            style={styles.inputField}
            theme={{
              colors: {
                primary: '#000', // Border color when active (focus)
                underlineColor: 'transparent', // Disable underline
                background: '#fff', // Background color
              },
            }}
          />

        </View>

      </View>
      <View style={{paddingHorizontal:20}}>
        <View style={{backgroundColor:'#fff',paddingHorizontal:20,paddingVertical:10}}>
        <Text>UPI</Text>
        <View style={{flexDirection:'column',gap:20}}>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{width:'50%'}}>
            <Text style={{fontWeight:800}}>Google Pay</Text>
            </View>

            <TouchableOpacity style={styles.button} >
            <Text style={{color:'#fff',fontWeight:800}}>Add {`₹${amount}`}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{width:'50%'}}>
            <Text style={{fontWeight:800}}>Paytm</Text>
            </View>

            <TouchableOpacity style={styles.button} >
            <Text style={{color:'#fff',fontWeight:800}}>Add {`₹${amount}`}</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
        <View style={{backgroundColor:'#fff',paddingHorizontal:20,paddingVertical:10}}>
        <Text>NETBANKING</Text>
        <View style={{flexDirection:'row',gap:20}}>
        <View>
        <Image source={require('./assets/trophy.png')} style={styles.profileImage} />
        </View>
        </View>
        </View>
       
      </View>
       {/* Content for active tab */}
     </View>
    {/* <View style={styles.bottomNavbar}>
        <TouchableOpacity onPress style={{flexDirection:'row',gap:5,alignItems:'center'}}>
            <Text>Add via</Text>
            <Image source={require('./assets/down.png')} style={styles.profileImage} />
        </TouchableOpacity>
    <TouchableOpacity style={styles.button} >
            <Text style={{color:'#fff',fontWeight:800}}>Add {`₹${amount}`}</Text>
          </TouchableOpacity>
      </View> */}
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   headingtext:{
     fontSize:12,
     color:'#EEEBEB'
   },  
   
   inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
  inputField:{
  width:'100%',
  borderColor:'#000'
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
   
   input: {
    width: 20,
    height: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 5,
    fontSize: 20,
    textAlign: 'center',
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
     alignItems: 'center',
     height: 70,
     paddingHorizontal:20,
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
     width: 20,
     height: 20,
     borderRadius: 24, // rounded-full
   },
   button: {
     flexDirection:'row',
     justifyContent:'center',
     gap:4,
     backgroundColor:'#53AF67',
     paddingVertical: 12,
     paddingHorizontal: 20,
     borderRadius: 5,
   },
   buttonText: {
     color: '#fff', // blue-500
     fontWeight: 'bold',
 
   },
 });
 
 export default Addcash;