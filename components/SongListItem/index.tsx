import React from "react";
import { StyleSheet, Text, View, Image, Appearance } from "react-native";
import { Song } from "../../types";

export type SongListItemProps = {
  song: Song;
};

export default function index(props: SongListItemProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.song.imageUri }} />
      <View style={styles.rightContainer}>
        <Text
          style={
            Appearance.getColorScheme() === "dark"
              ? styles.titleDark
              : styles.title
          }
        >
          {props.song.title}
        </Text>
        <Text
          style={
            Appearance.getColorScheme() === "dark"
              ? styles.artistDark
              : styles.artist
          }
        >
          {props.song.artist}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
