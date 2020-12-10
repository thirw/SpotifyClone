import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import AlbumCategory from "../components/AlbumCategory";
import AlbumCategoriesData from "../data/albumCategories";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={AlbumCategoriesData}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <AlbumCategory title={item.item.title} albums={item.item.albums} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleDark: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
