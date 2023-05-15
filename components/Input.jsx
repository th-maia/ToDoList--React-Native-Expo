import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Keyboard } from "react-native";

export default function Input({ submitHandler }) {
  const [value, setValue] = useState("");
  
  const onChangeText = (text) => {
    setValue(text);
  };

  const handleAddHabit = () => {
    setValue(submitHandler(value))
    setValue("");
    Keyboard.dismiss();
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Add Your Task"
          placeholderTextColor="#bbbb"
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddHabit} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    color: "white",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  button: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingVertical: 15,
    marginTop: 25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  }
});