import React, { useState,useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text,Image, TextInput, TouchableOpacity, StyleSheet, Modal, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as SecureStore from 'expo-secure-store';
// import * as SecureStore from 'expo-secure-store';
// import { useDispatch } from 'react-redux';

const LoginScreen = () => {
  // const dispatch = useDispatch();
  const [mobilenumber, setMobilenumber] = useState('');
  const [ismobileFocused, setIsMobileFocused] = useState(false);
  const [ispassFocused, setIsPassFocused] = useState(false);
  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);
  const navigation = useNavigation();
  const [user,setUser] = useState({ email: '', password:''});
  const [error,setError] = useState('')
  const navigateToAmountReceivedScreen = (phoneNumber) => {
    navigation.navigate('AmountReceived', { phoneNumber });
  };
  // const saveToken = async (key, value) => {
  //   await SecureStore.setItemAsync(key, value);
  // };
      const JoinTournament = async () => {
        const token = await AsyncStorage.getItem('token');
  
        const playerId = await AsyncStorage.getItem('playerId');
      
        try {
          const response = await fetch(`https://8c5c-2401-4900-8827-d00c-2c9a-1d44-15a9-697a.ngrok-free.app/api/tournament/join/676bcadef4d0321567fc45f8?playerId=${playerId}`,{
            method: 'PATCH',
          });
      
          // Check if the response is successful (status 200-299)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json(); // Parse response body as JSON
          console.log(data); // Log the data from the response
          console.log('Registered successfully');
        } catch (error) {
          console.error("Error joining the tournament:", error);
          console.log(error.message); // Log error message
          console.log('Registration failed');
        }
      }

   const fetchUserdata = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (response.ok) {
        const data = await response.json();

          console.error('Invalid data format:', data);
          return null;
      }
       else {
        console.error('Failed to fetch user profile:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };

  const goToSignup = () => {
    if (navigation) {
      navigation.navigate('Signup')// Correct usage of navigation
    }
  };
  const handleChange = (field, value) => {
    setError('');
    setUser((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const fetchuser = async () => {
    const token = localStorage.getItem('token');
    const userProfile = await fetchUserProfile();
    try {
      const response = await fetch(`http://localhost:8080/api/users/getBy-email?email=${userProfile.email}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        setuserId(data.userid)
        console.log(data.userid)
        return data;
      }
       else {
        console.error('Failed to fetch user profile:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };
  const fetchUserProfile = async () => {
    const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:7070/api/auth/adminuser/get-profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
    
        if (response.ok) {
          const data = await response.json();
          // Check if `ourUsers` exists in the response
          if (data.statusCode === 200 && data.ourUsers) {
            return data.ourUsers; // Return `ourUsers` object
          } else {
            console.error('Invalid data format:', data);
            return null;
          }
        } else {
          console.error('Failed to fetch user profile:', response.status);
          return null;
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }
    };

  const handleForgotPassword = () => {
    setShowForgotPasswordPopup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (user.password.length < 8) {
 
      return;
    }
    if (!user.email) {

      return;
    } else if (!emailPattern.test(user.email)) {

      return;
    }

    try {
      // const token = process.env.REACT_APP_GITHUB_TOKEN;
      const response = await fetch('https://4324-106-219-176-2.ngrok-free.app/api/user/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(user),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        const playerId = data.playerId;
        // Store the token securely
        await SecureStore.setItemAsync('token', token);
        await SecureStore.setItemAsync('playerId', playerId);
        console.log('Token stored securely');

        const gettoken = await SecureStore.getItemAsync('token');
        console.log('Token:', gettoken);

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

  return (
    <View style={{ flex: 1,backgroundColor:"#FC7941"}}>
    <ImageBackground style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 35}}>
      <View style={styles.inputContainer}>
        <View style={{gap:5}}>
      <View style={{ gap: 10 }}>
      <Text style={{fontWeight:500}}>Email</Text>
      <TextInput
        style={[styles.input, ismobileFocused && styles.focusedInput]}
        onChangeText={(value) => handleChange('email', value)}
        value={user.email}
        placeholder="Enter your email"
        keyboardType="email-address"
        required
        onFocus={() => setIsMobileFocused(true)}
        onBlur={() => setIsMobileFocused(false)}
      />
      <Text style={{fontWeight:500}}>Password</Text>
      <TextInput
        style={[styles.input, ismobileFocused && styles.focusedInput]}
        onChangeText={(value) => handleChange('password', value)}
        value={user.password}
        placeholder="Enter your password"
        secureTextEntry 
        required
        onFocus={() => setIsPassFocused(true)}
        onBlur={() => setIsPassFocused(false)}
      />
       </View>
        <TouchableOpacity  onPress={()=>navigateToAmountReceivedScreen(mobilenumber)} style={{ alignItems: 'flex-end' }}>
          <Text style={{  fontSize: 12, textDecorationLine: 'underline', cursor: 'pointer' }}>
            Forgot password
          </Text>
        </TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'column',gap:'10'}}>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={{color: '#fff', }}>Login</Text>
        </TouchableOpacity>
        </View>
      </View>

      <Modal visible={showForgotPasswordPopup} transparent={true} animationType="fade" onRequestClose={() => setShowForgotPasswordPopup(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.forgotPasswordPopup}>
            <View style={{display:'flex',flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={{fontWeight:800}}>OTP</Text>
            <Icon onPress={handleForgotPassword}  name='close' size={35} />
            </View>
            <TextInput style={styles.forgotinput} placeholder="OTP" keyboardType="numeric" onChangeText={(text) => {/* handle input change */}}/>

          </View>
        </View>
      </Modal>
      </ImageBackground>
    </View>

  );
};

const styles = StyleSheet.create({
  inputFocused: {
    borderColor: '#1F41BB',
    borderWidth: 1,
  },
  input: {
    paddingHorizontal: 10, // Equivalent to 'px-2'
    paddingVertical: 10,   // Equivalent to 'py-2'
    fontSize: 14,          // Equivalent to 'text-sm'
    borderWidth: 1,        // Equivalent to 'border'
    borderColor: '#D1D5DB', // Equivalent to 'border-gray-400'
    borderRadius: 4,       // Equivalent to 'rounded-md'
    backgroundColor: '#fff',
  },
  image:{
    height:50,
    width:'60%'
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, // Ensures gradient is behind other content
  },
  button: { // To stack the gradient background and text
    padding:10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#53AF67',
    zIndex: 2, 
    color:'#fff' // Ensures button is on top of the gradient
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height:10
  },
  forgotinput: {
    width:'80%',
    height: 40,
    border: 'none',
    backgroundColor: '#F3F6FF',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  forgotbutton:{
    backgroundColor: '#1F41BB',
    width: '60%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },  
  inputContainer: {
    display:'flex',
    flexDirection:'column',
    height:320,
    justifyContent: 'center',
    gap:'30',
    borderRadius: 5, 
    width:'85%',
    backgroundColor: '#fff',
    paddingHorizontal:20
  },
  forgotPasswordPopup: {
    width:'85%',
    backgroundColor: '#fff',
    padding: 20,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:20,
    borderRadius: 10,
  },
});

export default LoginScreen;
