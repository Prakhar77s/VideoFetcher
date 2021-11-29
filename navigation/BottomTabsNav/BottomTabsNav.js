import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeStackNav from "../StackNav/HomeStackNav";
import AboutStackNav from "../StackNav/AboutStackNav";
import ContactStackNav from "../StackNav/ContactStackNav";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const BottomTabsNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "#719FB0" }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNav}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="AboutTab"
        component={AboutStackNav}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <AntDesign name="infocirlceo" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="ContactTab"
        component={ContactStackNav}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="quick-contacts-mail" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNav;
