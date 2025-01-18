import React, { useEffect, useState } from 'react';
import { View, Image, ImageBackground,PanResponder, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import * as ScreenOrientation from 'expo-screen-orientation';

const Gameroom = () => {
  const [activeCards, setActiveCards] = useState({}); // Tracks active cards

  useEffect(() => {
    // Initialize animated values for each card's position
    const initialPositions = cardData.reduce((acc, card) => {
      acc[card.id] = new Animated.ValueXY({ x: 0, y: 0 });
      return acc;
    }, {});
    setCardPositions(initialPositions);
  }, []);

  useEffect(() => {
    // Lock orientation to landscape
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  const createPanResponder = (id) => {
    return {
      onStartShouldSetResponder: () => true,
      onResponderMove: Animated.event(
        [
          null,
          {
            dx: cardPositions[id].x,
            dy: cardPositions[id].y,
          },
        ],
        { useNativeDriver: false }
      ),
      onResponderRelease: () => {
        // Optionally, snap back or finalize card position
        console.log(`Card ${id} drag ended`);
      },
    };
  };

  const cardData = [
    { id: 1, text: 'K', imageSource: require('./assets/diamond.png') },
    { id: 2, text: 'Q', imageSource: require('./assets/diamond.png') },
    { id: 3, text: 'J', imageSource: require('./assets/diamond.png') },
    { id: 4, text: '10', imageSource: require('./assets/diamond.png') },
    { id: 5, text: '9', imageSource: require('./assets/diamond.png') },
    { id: 6, text: '8', imageSource: require('./assets/diamond.png') },
    { id: 7, text: '7', imageSource: require('./assets/diamond.png') },
    { id: 8, text: '6', imageSource: require('./assets/diamond.png') },
    { id: 9, text: '5', imageSource: require('./assets/diamond.png') },
    { id: 10, text: '4', imageSource: require('./assets/diamond.png') },
    { id: 11, text: '3', imageSource: require('./assets/diamond.png') },
    { id: 12, text: '2', imageSource: require('./assets/diamond.png') },
    { id: 13, text: 'A', imageSource: require('./assets/diamond.png') },
  ];

  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Create an animated value to control the position of the card
  const pan = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];

  // Create a PanResponder to handle dragging
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      // Update position of the card as the user drags it
      pan.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (e, gestureState) => {
      // When the drag ends, save the final position of the card
      setPosition({
        x: position.x + gestureState.dx,
        y: position.y + gestureState.dy,
      });
    },
  });

  const [cardPositions, setCardPositions] = useState(
    cardData.reduce((acc, card) => {
      acc[card.id] = 0; // initial position for each card
      return acc;
    }, {})
  );

  // Function to handle card press (if needed)
  const onCardPress = (id) => {
    console.log(`Card pressed: ${id}`);
  };

  // Function to create PanResponder for each card
  return (
    <ImageBackground source={require('./assets/table.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Add a semi-transparent header for contrast */}
        <View style={{flexDirection:'row',justifyContent:'center',width:'100%'}}>
        <View style={styles.header}>
          <View>
          <Text style={{fontSize:12,color:'#fff'}}>#149653456</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:12,color:'#fff'}}>Points Rummy</Text>
          <Text style={{fontSize:12,color:'#fff'}}>800</Text>
        </View>
        <View>
          <Text style={{fontSize:12,color:'#fff'}}>1300</Text>
          </View>
        <TouchableOpacity style={{backgroundColor:"#53AF67",height:20,paddingHorizontal:10,borderRadius:5,flexDirection:'row',alignItems:'center'}}> 
          <Text style={{fontSize:12,color:'#fff'}}>Add cash</Text>
        </TouchableOpacity>
        </View>

        </View>

  
        {/* The rest of the layout */}
        <View style={styles.body}>
       <View>

       </View>
       <View style={{flexDirection:'row',justifyContent:'center',height:60,}}>

        {cardData.map((card) => (
            <TouchableOpacity
              key={card.id}
              activeOpacity={0.8}
              onPress={() => onCardPress(card.id)}
            >
              <Animated.View  {...panResponder.panHandlers}
                style={[
                  styles.card,
                  { transform: [{ translateY: cardPositions[card.id] || 0 }] },
                ]}
              >
                <Text style={styles.cardText}>{card.text}</Text>
                <Image source={card.imageSource} style={styles.cardImage} />
              </Animated.View>
            </TouchableOpacity>
          ))}

        </View>
        </View>
        {/* <Animated.View
        {...panResponder.panHandlers}
        style={[
          {
            width: 200,
            height: 150,
            backgroundColor: '#007AFF',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            position: 'absolute',
            top: position.y,
            left: position.x,
          },
        ]}
      >
        <Text style={{ color: '#fff' }}>Drag Me!</Text>
      </Animated.View> */}
        <View style={styles.bottomNavbar}>
  <View style={{ width: '30%', backgroundColor: '#fff', height: 60, flexDirection: 'column', alignItems: 'center' }}>
    {/* Circle view positioned above the bottom navbar */}
    <View style={{
      backgroundColor: '#000',
      width: 60,
      height: 60,
      borderRadius: 100,
      position: 'absolute',
      bottom: 20,
      left:0 // This moves the circle above the navbar
      
 // Centers the circle horizontally
    }}></View>
    <View style={{}}>
    <Text style={{ color: '#000',fontSize:10 }}>Total Score</Text>
    <Text style={{ color: '#000',fontSize:20,fontWeight:700}}>80</Text>
    </View>

  </View>
</View>

      </View>
    </ImageBackground>
  );
  
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  bottomNavbar:{
    backgroundColor:'#000',
    flexDirection:'row',
    borderRadius:20,
    position:'relative',
    justifyContent:'center',
    height:42
  },
    container: {
    flex: 1,
    width: '100%',
  },
  card: {
    width: 50,
    height: 80,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 2, // Add shadow for a card effect
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardImage: {
    width: 20,
    height: 30,
  },
  header: {
    backgroundColor: '#000', // Semi-transparent background for contrast
    width: '50%',
    paddingHorizontal: 10,
    paddingVertical:5,
flexDirection:'row',
justifyContent:'space-between',
    marginTop:20,
    alignItems: 'center',
    zIndex: 1, // Ensure it appears above the background
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Ensure text contrasts with the background
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Gameroom;
