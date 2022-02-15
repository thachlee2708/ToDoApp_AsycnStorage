import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/Home/HomeContainer';
import InputScreen from './components/Input/InputContainer';
import DetailsScreen from './components/Details/DetailsContainer';
import DoingScreen from './components/Doing/DoingContainer';
import CompletedScreen from './components/Completed/CompletedContainer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const DoingStack = createNativeStackNavigator();
const CompletedStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home Screen"
        component={HomeScreen}></HomeStack.Screen>
      <HomeStack.Screen
        name="Input Screen"
        component={InputScreen}></HomeStack.Screen>
      <HomeStack.Screen
        name="Details Screen"
        component={DetailsScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}
function DoingStackScreen() {
  return (
    <DoingStack.Navigator>
      <DoingStack.Screen
        name="Doing Screen"
        component={DoingScreen}></DoingStack.Screen>
      <DoingStack.Screen
        name="Input Screen"
        component={InputScreen}></DoingStack.Screen>
      <DoingStack.Screen
        name="Details Screen"
        component={DetailsScreen}></DoingStack.Screen>
    </DoingStack.Navigator>
  );
}
function CompletedStackScreen() {
  return (
    <CompletedStack.Navigator>
      <CompletedStack.Screen
        name="Completed Screen"
        component={CompletedScreen}></CompletedStack.Screen>
      <CompletedStack.Screen
        name="Input Screen"
        component={InputScreen}></CompletedStack.Screen>
      <CompletedStack.Screen
        name="Details Screen"
        component={DetailsScreen}></CompletedStack.Screen>
    </CompletedStack.Navigator>
  );
}
function RootStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home Screen') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Doing Screen') {
              iconName = focused ? 'list' : 'list';
            } else if (route.name === 'Completed Screen') {
              iconName = focused ? 'check' : 'check';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home Screen" component={HomeStackScreen} />
        <Tab.Screen name="Doing Screen" component={DoingStackScreen} />
        <Tab.Screen name="Completed Screen" component={CompletedStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
