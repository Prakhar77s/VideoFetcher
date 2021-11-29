import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const ContactScreen = () => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{ color: colors.text }}>Contact</Text>
    </View>
  );
};

export default ContactScreen;
