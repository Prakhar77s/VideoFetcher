import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";
import { YoutubeApi } from "../../env";
import * as ScreenOrientation from "expo-screen-orientation";

const HomeScreen = () => {
  const navigation = useNavigation();

  const { colors } = useTheme();
  const [HomeCardData, setHomeCard] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=gurbani&type=video&key=${YoutubeApi}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setHomeCard(data.items);
      });
  };

  const [currentVideo, setVideo] = useState("4j4hAcGkb_Q");
  const [currentTitle, setTitle] = useState(
    "LIVE | Kirtan Darbar Sahib Amritsar | SGPC | 26 Nov 2021 | Sikhism Tv"
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <YoutubePlayer
          height={230}
          play={false}
          videoId={currentVideo}
          onFullScreenChange={(isFullScreen) => {
            if (isFullScreen) {
              ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE
              );
            } else {
              ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT
              );
            }
          }}
        />
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
          {currentTitle}
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          padding: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      ></View>

      <FlatList
        onRefresh={() => fetchData()}
        refreshing={loading}
        data={HomeCardData}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => {
                  setVideo(item.id.videoId);
                  setTitle(item.snippet.title);
                }}
              >
                <View
                  style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}
                >
                  <Image
                    source={{
                      uri: `https://i.ytimg.com/vi/${item.id.videoId}/hqdefault.jpg`,
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
                      {item.snippet.title}
                    </Text>
                    <Text style={{ fontSize: 12, color: colors.text }}>
                      {item.snippet.channelTitle}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

export default HomeScreen;
