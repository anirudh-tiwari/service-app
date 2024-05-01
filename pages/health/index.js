import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Video from "./video";
import Cards from "./cards";
// import Carousel from '../../components/carousel';

const Health = () => {
  return (
    <View style={styles.healthWrap}>
      <Video />
      {/* <Cards /> */}
      <Cards
      cards={[
        <View style={{ backgroundColor: 'red', width: 120, height: 220 }}>
          <Image
          source={require("../../assets/thumbnil.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        </View>,
        <View style={{ backgroundColor: 'green', width: 120, height: 220 }}>
          <Image
          source={require("../../assets/thumbnil.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        </View>,
        <View style={{ backgroundColor: 'blue', width: 120, height: 220 }}>
         <Image
          source={require("../../assets/thumbnil.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        </View>,
        
        // Add more card components here
      ]}
    />
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
