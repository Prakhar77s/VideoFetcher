import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={style.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={style.icon}
      />
      <View>
        <Text style={style.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 5,
    color: "black",
  },
});
