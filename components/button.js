import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({
  color = "white",
  backgroundColor = "black",
  text = "",
  borderRadius = 8,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        height: 30,
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        paddingHorizontal: 8
      }}
    >
      <Text style={{ color: color }} onPress={ onPress }>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;