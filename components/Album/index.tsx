import React from "react";
import {
  View,
  Text,
  Image,
  Appearance,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { AlbumType } from "../../types";
import { useNavigation } from "@react-navigation/native";

export type AlbumProps = {
  album: AlbumType;
};

export default function Album(props: AlbumProps) {
  const navigation = useNavigation();

  function onClick() {
    navigation.navigate("AlbumScreen", { id: props.album.item.id });
  }

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: props.album.item.imageUri }}
        />
        <Text
          style={
            Appearance.getColorScheme() === "dark"
              ? { color: "white", marginTop: 10 }
              : { color: "black", marginTop: 10 }
          }
        >
          {props.album.item.artistsHeadline}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 175,
    margin: 10,
  },
  image: {
    width: "100%",
    height: 175,
  },
  text: {},
  textDark: {
    color: "gray",
    marginTop: 10,
  },
});
