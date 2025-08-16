import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentBlock}>
        <Text style={styles.title}>Our Mission</Text>
        <Text style={styles.paragraph}>Our mission is to provide a seamless and engaging user experience through a well-crafted mobile application. We focus on clean design, intuitive navigation, and high performance.</Text>
      </View>
      <View style={styles.contentBlock}>
        <Text style={styles.title}>The Team</Text>
        <Text style={styles.paragraph}>We are a passionate team of developers dedicated to building beautiful and functional mobile apps using the latest technologies like React Native.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  contentBlock: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

export default AboutScreen;
