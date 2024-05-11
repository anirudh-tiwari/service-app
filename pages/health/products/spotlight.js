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

const Spotlight = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {productsList.supplement.data.map((item, index) => {
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
    flexWrap: "wrap",
  },
});

const Cards = ({ item }) => {
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth / 2; // 32 for column gap | 32 for padding

  const [rating, setRating] = useState(item.rating);

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <TouchableOpacity
      style={{
        width: cardWidth,
        height: 300,
        borderWidth: 0.2,
        borderColor: "white",
      }}
      onPress={() => {}}
    >
      <View
        style={{
          width: "42%",
          height: "44%",
          alignSelf: "center",
          paddingTop: 20,
        }}
      >
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 6,
            objectFit: "fill",
          }}
        />
      </View>
      <View style={{padding: 16, width: "100%", flexWrap: "nowrap" }}>
      <Text style={{color: "white"}}>{item.name}</Text>
      <View style={{flexDirection:"row", marginTop:8 }}>
      <StarRating
        rating={rating}
        totalStars={5}
        onStarPress={handleStarPress}
      />
      <Text style={{color: "#858585", fontSize:12, fontWeight: "500" }}>({item.review})</Text>
      </View>
      </View>
    </TouchableOpacity>
  );
};
