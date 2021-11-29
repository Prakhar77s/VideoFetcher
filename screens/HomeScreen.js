import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";
import Cards from "../components/Cards/Cards";

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=live%20kirtan%20darbar%20sahib&type=video&key=AIzaSyAt0b7vrBRSuzhDUXpk1iEflIAHzd3Maw4

const HomeScreen = () => {
  const { colors } = useTheme();
  const [MiniCardData, setMiniCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=gurbani&type=video&key=AIzaSyCv8euGchMV3A6_utBPrsL97__g5squ5B4`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMiniCard(data.items);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        {/* <YoutubePlayer
          height={230}
          play={false}
          videoId={"5ldj95U5sDc"}
          // onFullScreenChange={setOrientation}
        /> */}
      </View>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button title="Load Latest" onPress={() => fetchData()} />
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
        data={MiniCardData}
        renderItem={({ item }) => {
          return (
            <Cards
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

export default HomeScreen;
