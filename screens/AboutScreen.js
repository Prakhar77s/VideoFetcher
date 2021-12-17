import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const AboutScreen = () => {
  const { colors } = useTheme();

  return (
    <View>
      <View style={{ color: colors.text, marginTop: 30 }}>
        <Text
          style={{
            color: colors.text,
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          www.dekho-ji.com is Top-5 website for Punjabi Sikh Festivals & Gurbani
          (Google Search Rankings SERP)
        </Text>
      </View>
    </View>
  );
};

export default AboutScreen;
