import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import Header from './components/Header';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={({ navigation, route }) => ({
          header: () => <Header navigation={navigation} title={route.name} />,
          drawerStyle: {
            backgroundColor: '#f8f9fa',
            width: 250,
          },
          drawerActiveTintColor: '#007bff',
          drawerInactiveTintColor: 'gray',
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: '500',
          },
        })}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
