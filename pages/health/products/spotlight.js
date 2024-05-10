import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { departmentList } from "../utils";

const Spotlight = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontWeight: "600", fontSize: 18, color: "white" }}>
          Trending Near You
        </Text>
        <Text
          style={{
            fontWeight: "400",
            marginBottom: 10,
            fontSize: 14,
            color: "#858585",
          }}
        >
          Popular in your city
        </Text>
      </View>
      <View style={styles.wrapper}>
        {departmentList.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </View>
    </View>
  );
};

export default Spotlight;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  wrapper: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    flexWrap: "wrap",
  },
});

const Cards = ({ item }) => {
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth) / 2; // 32 for column gap | 32 for padding
  return (
    <TouchableOpacity
      style={{
        width: cardWidth,
        height: 240,
        borderWidth: 0.2,
        borderColor: "white",
      }}
      onPress={() => {}}
    >
      <Image
        source={item.image}
        style={{
          width: "60%",
          height: 100,
          borderRadius: 6,
          objectFit: "fill",
        }}
      />
    </TouchableOpacity>
  );
};
