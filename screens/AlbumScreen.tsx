import React, { useEffect } from "react";
import { StyleSheet, Text, View, Appearance, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import albumDetails from "../data/albumDetails.ts";
import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";

export default function AlbumScreen() {
  const route = useRoute();

  useEffect(() => {
    console.log("route", route);
  }, []);

  return (
    <View>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
