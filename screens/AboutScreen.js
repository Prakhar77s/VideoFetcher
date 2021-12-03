import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const AboutScreen = () => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{ color: colors.text }}>About</Text>
    </View>
  );
};

export default AboutScreen;
