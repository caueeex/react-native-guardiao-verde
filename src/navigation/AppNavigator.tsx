import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Learn from '../pages/Learn';
import ContentDetail from '../pages/ContentDetail';
import Map from '../pages/Map';
import CarbonCalculator from '../pages/CarbonCalculator';
import Community from '../pages/Community';

const Tab = createBottomTabNavigator();
const LearnStack = createNativeStackNavigator();

const LearnStackScreen = () => (
  <LearnStack.Navigator screenOptions={{ headerShown: false }}>
    <LearnStack.Screen name="LearnHome" component={Learn} />
    <LearnStack.Screen name="ContentDetail" component={ContentDetail} />
  </LearnStack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Início':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Aprender':
                iconName = focused ? 'book' : 'book-outline';
                break;
              case 'Mapa':
                iconName = focused ? 'map' : 'map-outline';
                break;
              case 'Carbono':
                iconName = focused ? 'leaf' : 'leaf-outline';
                break;
              case 'Comunidade':
                iconName = focused ? 'people' : 'people-outline';
                break;
              default:
                iconName = 'help-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2E7D32',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#E0E0E0',
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
        })}
      >
        <Tab.Screen name="Início" component={Home} />
        <Tab.Screen name="Aprender" component={LearnStackScreen} />
        <Tab.Screen name="Mapa" component={Map} />
        <Tab.Screen name="Carbono" component={CarbonCalculator} />
        <Tab.Screen name="Comunidade" component={Community} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 