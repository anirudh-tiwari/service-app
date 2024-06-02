import React, { useState } from "react";
import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";
import Slider from "./slider";
import MapComponent from "./map";

const Track = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  const handleSlideUp = () => {
    setIsSliderVisible(true);
  };

  const handleSlideDown = () => {
    setIsSliderVisible(false);
  };

  return (
    <View style={styles.container}>
      <MapComponent />
      <TouchableOpacity
        style={styles.trackButton}
        activeOpacity={1}
        onPress={handleSlideUp}
      >
        <Text style={styles.trackButtonText}>Track me</Text>
      </TouchableOpacity>
      <Slider isVisible={isSliderVisible} onClose={handleSlideDown} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  trackButton: {
    backgroundColor: '#388E3C', // Adjust this color to match your theme
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    position:"absolute",
    bottom: 30
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Track;
