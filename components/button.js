import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({
  color = "white",
  backgroundColor = "black",
  text = "",
  borderRadius = 8,
  onPress,
  width = "20%",
  height = 30,
  fontWeight = "400",
  fontSize = 14,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        height: height,
        width: width,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        paddingHorizontal: 8,
      }}
    >
      <Text
        style={{ color: color, fontWeight: fontWeight, fontSize: fontSize }}
        onPress={onPress}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
