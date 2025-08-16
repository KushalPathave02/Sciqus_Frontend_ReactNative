import React, { useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';

// A single animated button component
const AnimatedButton = ({ style, text, onPress }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <Pressable
        style={style}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress} // Add the onPress handler
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </Animated.View>
  );
};

const StyledButtons = () => {
  return (
    <View style={styles.container}>
      <AnimatedButton 
        style={[styles.button, styles.primaryButton]} 
        text="Primary Action" 
        onPress={() => alert('Primary Action Pressed!')} 
      />
      <AnimatedButton 
        style={[styles.button, styles.secondaryButton]} 
        text="Secondary Action" 
        onPress={() => alert('Secondary Action Pressed!')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#007bff',
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StyledButtons;
