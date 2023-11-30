import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Imagen from "../components/Imagen";
import datos from "../assets/data/result.json";

export default function Galeria() {
  console.log(datos.Search);
  const data = datos.Search;

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Galeria</Text>
      <FlatList horizontal={false} showsVerticalScrollIndicator data={data} renderItem={({ item }) => <Imagen data={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff97f9",
  },
  text1: {
    fontSize: 50,
    color: "white",
  },
});
