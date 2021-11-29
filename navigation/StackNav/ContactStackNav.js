import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ContactScreen from "../../screens/ContactScreen";
import CustomHeader from "../../components/CustomHeader/CustomHeader";

const ContactStack = createStackNavigator();

const ContactStackNav = () => {
  return (
    <ContactStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#719FB0",
          height: 60,
        },
      }}
    >
      <ContactStack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={({ navigation }) => {
          return {
            headerTitle: (props) => (
              <CustomHeader
                {...props}
                navigation={navigation}
                title="CONTACT"
              />
            ),
          };
        }}
      />
    </ContactStack.Navigator>
  );
};

export default ContactStackNav;
