import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "./header";
import SearchComponent from "../../components/Search";
import FilterIcon from "../../components/filter";
import { useState } from "react";
import Cards from "./cards";

const FoodList = () => {
  const [activeTag, setActiveTag] = useState("pizza");
  return (
    <View style={styles.wrapper}>
      <Header />
      <View style={styles.container}>
        <View style={styles.column1}>
          <SearchComponent />
        </View>
        <View style={styles.column2}>
          <FilterIcon />
        </View>
      </View>
      <View style={{ marginVertical: 10 }}>
        <FlatList
          data={tagsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  height: 36,
                  width: 88,
                  borderRadius: 20,
                  borderWidth: 1,
                  // justifyContent: "center",
                  alignItems: "center",
                  marginLeft: index ? 10 : 0,
                  backgroundColor:
                    activeTag === item.key ? "#F37B2D" : "#FEDAD1",
                  flexDirection: "row",
                  gap: 3,
                  padding: 3,
                }}
                onPress={() => setActiveTag(item.key)}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 50,
                    width: 30,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image source={item.icon} style={{ width: 20, height: 20 }} />
                </View>
                <Text
                  style={{
                    color: activeTag === item.key ? "white" : "gray",
                    fontWeight: "500",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <FlatList
        data={cardData}
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          columnGap: 16,
        }}
        renderItem={({ item, index }) => {
          return <Cards item={item} />;
        }}
      />
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 16,
    paddingVertical: 16,
    height: "100%",
  },
  container: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  column1: {
    flex: 7, // Takes up 80% of the container width
  },
  column2: {
    flex: 1, // Takes up 20% of the container width
  },
});

const tagsData = [
  {
    name: "Pizza",
    key: "pizza",
    icon: require("../../assets/pizza.png"),
  },
  {
    name: "Burger",
    key: "burger",
    icon: require("../../assets/burger.png"),
  },
  {
    name: "Drinks",
    key: "drinks",
    icon: require("../../assets/soda.png"),
  },
  {
    name: "Pizza",
    key: "pizza2",
    icon: require("../../assets/pizza.png"),
  },
  {
    name: "Burger",
    key: "burger2",
    icon: require("../../assets/burger.png"),
  },
  {
    name: "Drinks",
    key: "drinks2",
    icon: require("../../assets/soda.png"),
  },
];

const cardData = [
  {
    name: "Tshirt 1",
    desc: "with cheese",
    price: 300,
    gender: "male",
    image: require("../../assets/burger.jpeg"),
  },
  {
    name: "t-shirt 2",
    desc: "with cheese",
    price: 349,
    gender: "male",
    image: require("../../assets/burger2.jpeg"),
  },
  {
    name: "t-shirt 3",
    desc: "with cheese",
    price: 200,
    gender: "male",
    image: require("../../assets/burger3.jpeg"),
  },
  {
    name: "t-shirt 4",
    desc: "with cheese",
    price: 299,
    gender: "male",
    image: require("../../assets/burger4.jpeg"),
  },
  {
    name: "t-shirt 5",
    desc: "with cheese",
    price: 399,
    gender: "male",
    image: require("../../assets/burger5.jpeg"),
  },
];
