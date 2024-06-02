import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Slider from './slider';

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
      <Button title="Show Slider" onPress={handleSlideUp} />
      <Slider isVisible={isSliderVisible} onClose={handleSlideDown} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Track;
