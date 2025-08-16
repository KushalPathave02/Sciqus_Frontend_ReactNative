import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const InteractiveSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Value: {sliderValue.toFixed(0)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#888"
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    width: '80%',
    height: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default InteractiveSlider;
