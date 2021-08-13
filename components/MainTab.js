import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import AttendanceScreen from "../screens/AttendanceScreen";
import BookScreen from "../screens/BookScreen";
import FineScreen from "../screens/FineScreen";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#003f5c",
      }}
      initialRouteName="Attendance">
      <Tab.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Books"
        component={BookScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="book-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Fine"
        component={FineScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="card-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
