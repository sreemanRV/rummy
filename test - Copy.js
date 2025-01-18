import React, { useState } from "react";
import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import { LogBox } from "react-native";

const Test = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]); // Initialize as an empty array

  const sendData = async () => {
    try {
      // Prepare the data to send
      const data = { name: input };

      // Make the POST request using fetch API
      const response = await fetch(` https://40f1-2401-4900-1cd0-5265-210b-c37b-40f8-4eec.ngrok-free.app/demo/add/${input}`, {
        method: 'POST',
      });

      // Check if the response is okay (status code 200-299)
      if (response.ok) {
        console.log('Success: Data sent');
        getData(); // Call getData after successfully sending data
      } else {
        console.log('Failed to send data');
      }
    } catch (error) {
        console.log(input)
      console.error('Error:', error);
    }
  };

  const getData = async () => {
    try {
      // Make the GET request using fetch API
      const response = await fetch(' https://40f1-2401-4900-1cd0-5265-210b-c37b-40f8-4eec.ngrok-free.app/demo/get', {
        method: 'GET',
      });

      // Check if the response is okay (status code 200-299)
      if (response.ok) {
        const data = await response.json();
        setData(data); // Set the data from the response
        console.log(data);
      } else {
        console.log('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={{ flexDirection: 'column', padding: 20 }}>
      <TextInput
        onChangeText={(text) => {setInput(text)}}
        theme={{
          colors: {
            primary: '#000', // Border color when active (focus)
            underlineColor: 'transparent', // Disable underline
            background: '#fff', // Background color
          },
        }}
      />

      <TouchableOpacity onPress={sendData} style={{ padding: 20, backgroundColor: '#000', marginTop: 10 }}>
        <Text style={{ color: '#fff' }}>Add</Text>
      </TouchableOpacity>

      {/* Display the data */}
      {data?.length > 0 ? (
        data.map((name, index) => (
          <Text key={index}>{name.name}</Text>
        ))
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

export default Test;
