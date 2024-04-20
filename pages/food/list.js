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

const FoodList = () => {
  const [activeTag,setActiveTag] = useState('pizza');
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
      <View style={{ marginTop: 20 }}>
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
                  backgroundColor: activeTag === item.key ? "#F37B2D" : '#FEDAD1',
                  flexDirection: 'row',
                  gap: 3,
                  padding: 3
                }}
                onPress={()=>setActiveTag(item.key)}
              >
                <View style={{ backgroundColor: 'white', borderRadius: 50, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={item.icon} style={{ width: 20, height: 20 }} />
                </View>
                <Text
                  style={{ color: activeTag === item.key ? "white" :  "gray", fontWeight: '500' }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text>list</Text>
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
