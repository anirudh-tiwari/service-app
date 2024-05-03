import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Video from "./video";
import Cards from "./cards";
import Header from "./header";
import Services from "./services";

const Health = () => {
  return (
    <View style={styles.healthWrap}>
      <Header />
      <Video />
      <Services />
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
