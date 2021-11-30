import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@react-navigation/native";

const HomeCards = (props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("VideoPlayer", {
          videoId: props.videoId,
          title: props.title,
        })
      }
    >
      <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{
            width: "45%",
            height: 100,
          }}
        />
        <View
          style={{
            paddingLeft: 7,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: colors.text,
              width: Dimensions.get("screen").width / 2,
            }}
            ellipsizeMode="tail"
            numberOfLines={3}
          >
            {props.title}
          </Text>
          <Text style={{ fontSize: 12, color: colors.text }}>
            {props.channel}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCards;
