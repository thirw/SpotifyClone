import React from "react";
import { StyleSheet, Text, View, Image, Appearance } from "react-native";
import { Song } from "../../types";

const song = {
  id: "1",
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  title: "High on You",
  artist: "Helen",
};

export default function playerWidget() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: song.imageUri }} />
      <View style={styles.rightContainer}>
        <Text
          style={
            Appearance.getColorScheme() === "dark"
              ? styles.titleDark
              : styles.title
          }
        >
          {song.title}
        </Text>
        <Text
          style={
            Appearance.getColorScheme() === "dark"
              ? styles.artistDark
              : styles.artist
          }
        >
          {song.artist}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 64,
    backgroundColor: "black",
    flexDirection: "row",
    width: "100%",
    margin: 15,
  },

  image: {
    width: 75,
    height: 75,
  },
  rightContainer: {
    justifyContent: "space-around",
    marginLeft: 10,
  },
  title: {
    color: "black",
    fontSize: 24,
  },
  titleDark: {
    fontSize: 24,
    color: "white",
  },
  artist: {
    color: "gray",
    fontSize: 20,
  },
  artistDark: {
    color: "lightgray",
    fontSize: 20,
  },
});
