import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ImageCarousel from '../components/ImageCarousel';
import InteractiveSlider from '../components/InteractiveSlider';
import StyledButtons from '../components/StyledButtons';
import AnimatedSection from '../components/AnimatedSection';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.mainContent}>
      <View style={styles.contentBlock}>
        <ImageCarousel />
      </View>
      <View style={styles.contentBlock}>
        <Text style={styles.staticTitle}>About Our App</Text>
        <Text style={styles.staticText}>This is a brief description of what our amazing application does. It's designed to be intuitive and user-friendly.</Text>
      </View>
      <View style={styles.contentBlock}>
        <InteractiveSlider />
      </View>
      <View style={styles.contentBlock}>
        <Text style={styles.staticTitle}>A Feature Image</Text>
        <View style={styles.imagePlaceholder} />
        <Text style={styles.staticText}>This section can contain an image with a caption or some related information.</Text>
      </View>
      <View style={styles.contentBlock}>
        <StyledButtons />
      </View>
      <View style={styles.contentBlock}>
        <AnimatedSection />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  staticTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  staticText: {
    textAlign: 'center',
    color: '#666',
  },
  imagePlaceholder: {
    width: '80%',
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginVertical: 10,
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  contentBlock: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    minHeight: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default HomeScreen;
