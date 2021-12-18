import React from "react";
import {
  Text,
  View,
  Linking,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
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

            fontSize: 20,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          www.dekho-ji.com is Top-5 website for Punjabi Sikh Festivals & Gurbani
          (Google Search Rankings SERP)
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: colors.text,
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Find more usefull links below:
        </Text>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.dekho-ji.com/signuppage")}
        >
          <Text style={styles.usefullLinks}>
            DAILY UPDATES - SIKH FESTIVALS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.dekho-ji.com/calendar?t=nanakshahi&p=12"
            )
          }
        >
          <Text style={styles.usefullLinks}>Nanakshahi Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.dekho-ji.com/calendar?t=sangrand")
          }
        >
          <Text style={styles.usefullLinks}>Sangrand Sankranti Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.dekho-ji.com/calendar?t=gurpurab")
          }
        >
          <Text style={styles.usefullLinks}>Gurpurab Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.dekho-ji.com/calendar?t=puranmashi")
          }
        >
          <Text style={styles.usefullLinks}>Puranmashi Puniya Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.dekho-ji.com/calendar?t=masya")
          }
        >
          <Text style={styles.usefullLinks}>Masya Amavasya Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.dekho-ji.com/calendar?t=panchami")
          }
        >
          <Text style={styles.usefullLinks}>Panchami Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.dekho-ji.com/calendar?t=dashmi")
          }
        >
          <Text style={styles.usefullLinks}>Dashmi Dasvi Calendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  usefullLinks: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    marginTop: 30,
  },
});

export default AboutScreen;
