import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AboutScreen from "../../screens/AboutScreen";
import CustomHeader from "../../components/CustomHeader/CustomHeader";

const AboutStack = createStackNavigator();

const AboutStackNav = () => {
  return (
    <AboutStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#719FB0",
          height: 60,
        },
      }}
    >
      <AboutStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={({ navigation }) => {
          return {
            headerTitle: (props) => (
              <CustomHeader {...props} navigation={navigation} title="ABOUT" />
            ),
          };
        }}
      />
    </AboutStack.Navigator>
  );
};

export default AboutStackNav;
