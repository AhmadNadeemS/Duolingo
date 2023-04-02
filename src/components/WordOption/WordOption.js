import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Pressable } from "react-native";

export default function WordOption({ onPress, text, isSelected }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.root,
        { backgroundColor: isSelected ? "lightgray" : "white" },
      ]}
    >
      <Text style={styles.text}>{!isSelected ? text : ""}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgray",
    borderRadius: 5,

    padding: 10,
    paddingHorizontal: 15,
    margin: 10,
  },
  text: {},
});
