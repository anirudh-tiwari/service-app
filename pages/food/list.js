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
import { useEffect, useState } from "react";
import Cards from "./cards";
import { cardData, tagsData } from "./utils";

const FoodList = () => {
  const [activeTag, setActiveTag] = useState("");
  const [pizzaList, setPizzaList] = useState([]);
  const [creamList, setCreamList] = useState([]);
  const [sweetsList, setSweetsList] = useState([]);
  const [burgerList, setBurgerList] = useState([]);

  useEffect(() => {
    const pizzaData = cardData.filter((data) => data.tag === "pizza");
    const creamData = cardData.filter((data) => data.tag === "cream");
    const sweetsData = cardData.filter((data) => data.tag === "sweets");
    const burgerData = cardData.filter((data) => data.tag === "burger");

    setPizzaList(pizzaData);
    setCreamList(creamData);
    setSweetsList(sweetsData);
    setBurgerList(burgerData);
  }, []);

  const handleData = () => {
    if (activeTag === "pizza") {
      return pizzaList;
    } else if (activeTag === "cream") {
      return creamList;
    } else if (activeTag === "sweets") {
      return sweetsList;
    } else if (activeTag === "burger") {
      return burgerList;
    }
    return cardData;
  };

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
        data={handleData()}
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
