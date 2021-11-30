import React, { useState, Component, useEffect } from "react";
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
import HomeCards from "./HomeCards";

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=live%20kirtan%20darbar%20sahib&type=video&key=AIzaSyAt0b7vrBRSuzhDUXpk1iEflIAHzd3Maw4

const HomeScreen = () => {
  const { colors } = useTheme();
  const [HomeCardData, setHomeCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=gurbani&type=video&key=AIzaSyDTP1SHztR3xGGjq9zuqTAeVpfnUfEmYX4`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setHomeCard(data.items);
      });
  };

  useEffect(() => {
    // runs on every render
    fetchData();
  }, []);

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
        {/* <Button title="Load Latest" onPress={() => fetchData()} /> */}
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
        data={HomeCardData}
        renderItem={({ item }) => {
          return (
            <HomeCards
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
