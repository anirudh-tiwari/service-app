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
import { useNavigation } from "@react-navigation/native";

const Products = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontWeight: "600", marginBottom: 6, fontSize: 16, color: "white" }}>
          Popular Category
        </Text>
      </View>
      <View style={styles.wrapper}>
        {cardData.generic.data.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </View>
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "sticky",
    zIndex: 0,
    top: 0,
    marginBottom: 4,
  },
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
  const cardWidth = (screenWidth - 32 - 32) / 3; // 32 for column gap | 32 for padding
  navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        width: cardWidth,
        backgroundColor: "#252A32",
        marginBottom: 18,
      }}
      onPress={() => navigation.navigate("HealthProduct", { item: item.type } )}
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
