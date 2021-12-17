import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function ContactButtons({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#008CBA",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    marginBottom: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
