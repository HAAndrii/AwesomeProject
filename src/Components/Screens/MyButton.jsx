import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function myButton(props) {
  const { onPress, title, buttonStyle, textStyle } = props;
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
