import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Appearance,
  Image,
  TouchableOpacity,
} from "react-native";
import { Album } from "../../types";

export type AlbumHeaderProps = {
  album: Album;
};

export default function AlbumHeader(props: AlbumHeaderProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.album.imageUri }} />
      <Text
        style={
          Appearance.getColorScheme() === "dark" ? styles.nameDark : styles.name
        }
      >
        {props.album.name}
      </Text>
      <View style={styles.creatorContainer}>
        <Text
          style={
            Appearance.getColorScheme() === "dark"
              ? styles.textDark
              : styles.text
          }
        >
          By {props.album.by}
        </Text>
        <Text
          style={
            Appearance.getColorScheme() === "dark"
              ? styles.textDark
              : styles.text
          }
        >
          {props.album.numberOfLikes} Likes
        </Text>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
  },
  name: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  nameDark: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  creatorContainer: {
    flexDirection: "row",
    margin: 10,
  },
  textDark: {
    color: "lightgray",
    margin: 5,
    fontSize: 20,
  },
  text: {
    color: "gray",
    margin: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#1CD05D",
    height: 60,
    width: 175,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
