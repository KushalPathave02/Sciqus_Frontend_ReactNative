import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Header = ({ navigation, title }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.iconContainer}>
        <Text style={styles.hamburger}>☰</Text>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {/* Add a spacer to balance the layout */}
      <View style={styles.iconContainer} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 80, // Increased height for better spacing
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingTop: 20, // Add padding for status bar area
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    padding: 5,
  },
  hamburger: {
    fontSize: 30,
    color: '#333',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600', // Slightly less bold
    color: '#333',
  },
});

export default Header;
