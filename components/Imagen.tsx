import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Imagen(props:any) {
  console.log(props.data);
  
  return (
    <View>
      <View style={{flexDirection:'column'}}>


      <Text>{props.data.Title}</Text>
      <Image style={styles.img1} source={{uri:props.data.Poster}}/>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img1:{
    width:400,
    height:200,
  },
});
