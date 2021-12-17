import React from "react";
import { Text, View, Linking, Touchable, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

const AboutScreen = () => {
  const { colors } = useTheme();

  return (
    <View>
      <View style={{ color: colors.text, marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.dekho-ji.com/")}
        >
          <Text
            style={{
              color: "blue",
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Dekho-ji.com
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: colors.text,
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
            marginTop: 20,
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
