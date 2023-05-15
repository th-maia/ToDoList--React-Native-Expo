import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={styles.title}>To Do List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    color: "white",
    fontWeight: 'bold',
    textAlign: 'center',
  }
});