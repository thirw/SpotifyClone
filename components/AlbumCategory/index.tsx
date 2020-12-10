import React from "react";
import { StyleSheet, Text, View, FlatList, Appearance } from "react-native";
import { AlbumType } from "../../types";
import Album from "../Album";

export interface AlbumCategoryProps {
  title: string;
  albums: [AlbumType];
}

export default function AlbumCategory(props: AlbumCategoryProps) {
  console.log("albums", props);
  return (
    <View style={styles.container}>
      <Text
        style={
          Appearance.getColorScheme() === "dark"
            ? styles.titleDark
            : styles.title
        }
      >
        {props.title}
      </Text>
      <FlatList
        data={props.albums}
        renderItem={(item) => <Album album={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: { color: "black", fontSize: 30, fontWeight: "bold", margin: 10 },
  titleDark: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
});
