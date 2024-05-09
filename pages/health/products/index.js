import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cardData } from "../utils";

const Products = () => {
  return (
    <View style={styles.wrapper}>
      {cardData.generic.data.map((item, index) => {
        return <Cards item={item} key={index} />;
      })}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    columnGap: 16,
    flexWrap: "wrap",
  },
});

const Cards = ({ item }) => {
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 32 - 32) / 3;  // 32 for column gap | 32 for padding
  console.log('anicardWidth',cardWidth);
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        width: cardWidth,
        backgroundColor: "#252A32",
        marginBottom: 18,
      }}
      onPress={() => {}}
    >
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: 140,
          borderRadius: 20,
          objectFit: "fill",
        }}
      />
    </TouchableOpacity>
  );
};
