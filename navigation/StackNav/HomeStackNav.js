import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../../screens/HomeScreen";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import VideoPlayer from "../../screens/VideoPlayer";
import SearchScreen from "../../screens/SearchScreen";

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
      <HomeStack.Screen name="VideoPlayer" component={VideoPlayer} />
      <HomeStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
