import {
    View,
    TouchableOpacity,
    Text,
    Image,
    Dimensions,
    StyleSheet,
  } from "react-native";
  import { productsList } from "../utils";
  
const screenWidth = Dimensions.get("window").width;

const Category = ({type}) => {
  return (
    <View style={{paddingHorizontal: 16, marginTop:16 }}>
      <Text
        style={{
          fontWeight: "600",
          marginBottom: 8,
          fontSize: 18,
          color: "white",
        }}
      >
        Popular Category
      </Text>
      <View style={styles.wrapper}>
        {productsList[type].category.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 4,
        columnGap: 10,
        flexWrap: "wrap",
      },
})

const Cards = ({ item }) => {
  const cardWidth = (screenWidth - 32 - 20) / 3; // 32 for column gap | 32 for padding
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
          height: 100,
          borderRadius: 6,
          objectFit: "fill",
        }}
      />
    </TouchableOpacity>
  );
};
