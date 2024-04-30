import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Video from "./video";
// import Carousel from '../../components/carousel';

const Health = () => {
  return (
    <View style={styles.healthWrap}>
      <Video />
    </View>
  );
};

export default Health;

const styles = StyleSheet.create({
  healthWrap: {
    backgroundColor: "black",
    flex: 1,
    justifyConttent: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});
