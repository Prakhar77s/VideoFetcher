import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";
import SearchVideoPlayer from "../../screens/SearchScreen/SearchVideoPlayer";

const HomeStack = createStackNavigator();

const HomeStackNav = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#719FB0",
          height: 60,
        },
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => {
          return {
            headerTitle: (props) => (
              <CustomHeader {...props} navigation={navigation} title="HOME" />
            ),
          };
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
