import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchCards from "./SearchCards";
import { useTheme, useNavigation } from "@react-navigation/native";

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=live%20kirtan%20darbar%20sahib&type=video&key=AIzaSyAt0b7vrBRSuzhDUXpk1iEflIAHzd3Maw4

const SearchScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [value, setValue] = useState("");
  const [SearchCardData, setSearchCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDTP1SHztR3xGGjq9zuqTAeVpfnUfEmYX4`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setSearchCard(data.items);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Ionicons
          name="md-arrow-back"
          size={32}
          color={colors.text}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={{ width: "75%", backgroundColor: "#e6e6e6", borderRadius: 10 }}
          value={value}
          placeholder="Tap here to type"
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons
          name="md-send"
          size={32}
          color={colors.text}
          onPress={() => fetchData()}
        />
      </View>
      {/*  */}
      {/*  */}
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 10 }}
          size="large"
          color="blue"
        />
      ) : null}
      <FlatList
        data={SearchCardData}
        renderItem={({ item }) => {
          return (
            <SearchCards
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

export default SearchScreen;
