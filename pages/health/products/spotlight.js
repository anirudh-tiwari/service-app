import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { productsList } from "../utils";
import StarRating from "../../../components/Rating";
import { useState } from "react";

const Spotlight = ({type}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {productsList[type].data.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </View>
    </View>
  );
};

export default Spotlight;

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth / 2; // 32 for column gap | 32 for padding

const Cards = ({ item }) => {
  const [rating, setRating] = useState(item.rating);

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={() => {}}>
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={{ padding: 16, width: "100%", flexWrap: "nowrap" }}>
        <Text style={{ color: "white" }}>{item.name}</Text>
        <View style={styles.block}>
          <StarRating
            rating={rating}
            totalStars={5}
            onStarPress={handleStarPress}
          />
          <Text style={{ color: "#858585", fontSize: 12, fontWeight: "500" }}>
            ({item.review})
          </Text>
        </View>
        <View style={styles.block}>
          <Text style={{ color: "#858585", marginRight: 4 }}>MRP</Text>
          <Text
            style={{
              color: "#858585",
              textDecorationLine: "line-through",
              marginRight: 8,
            }}
          >
            ₹{item.price}
          </Text>
          <Text style={styles.tag}>{item.discountPercent}% OFF</Text>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 16, marginTop: 4 }}>
            ₹{item.discountedPrice}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  wrapper: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  cardWrapper: {
    width: cardWidth,
    height: "auto",
    borderWidth: 0.2,
    borderColor: "white",
  },
  cardContainer: {
    width: "32%",
    // height: "44%",
    height: 146,
    alignSelf: "center",
    paddingTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
    objectFit: "fill",
  },
  block: { flexDirection: "row", marginTop: 6 },
  tag: {
    backgroundColor: "#0096FF",
    color: "white",
    fontWeight: "600",
    paddingHorizontal: 4,
    borderRadius: 2,
    fontSize: 10,
    height: 16,
    alignSelf: "center",
  },
});
