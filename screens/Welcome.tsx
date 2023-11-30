import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0df2c9'
    }
})