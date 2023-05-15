import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Empty() {
  return (
    <View>
      <Text style={styles.title}>Your List is Empty!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: 'bold',
    textAlign: 'center',
  }
});