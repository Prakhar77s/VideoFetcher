import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { WebView } from "react-native-webview";
import { useTheme } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";
import Cards from "../components/Cards/Cards";

// import * as ScreenOrientation from "expo-screen-orientation";

const VideoPlayer = ({ route }) => {
  const { colors } = useTheme();
  const { videoId, title } = route.params;
  // function setOrientation() {
  //   if (Dimensions.get("window").height > Dimensions.get("window").width) {
  //     //Device is in portrait mode, rotate to landscape mode.
  //     ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  //   } else {
  //     //Device is in landscape mode, rotate to portrait mode.
  //     ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  //   }
  // }

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
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 220,
        }}
      >
        <YoutubePlayer
          height={300}
          play={false}
          videoId={videoId}
          // onFullScreenChange={setOrientation}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          color: colors.text,
          width: Dimensions.get("screen").width - 50,
          margin: 9,
        }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      <View style={{ borderBottomWidth: 1 }} />
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
    </View>
  );
};

export default VideoPlayer;
