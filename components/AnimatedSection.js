import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';

const AnimatedSection = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000, // Animation duration in milliseconds
        useNativeDriver: true, // Add this for better performance
      }
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim, // Bind opacity to animated value
        },
      ]}
    >
      <Text style={styles.text}>I faded in!</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AnimatedSection;
