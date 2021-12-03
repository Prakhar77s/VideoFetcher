import React from "react";
import { Text, View, Dimensions } from "react-native";
import { useTheme } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";

import * as ScreenOrientation from "expo-screen-orientation";

const SearchVideoPlayer = ({ route }) => {
  const { colors } = useTheme();
  const { videoId, title } = route.params;

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
    </View>
  );
};

export default SearchVideoPlayer;
