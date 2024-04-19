import { View, Text, StyleSheet } from "react-native";
import Header from "./header";
import SearchComponent from "../../components/Search";

const FoodList = () => {
  return (
    <View style={styles.wrapper}>
      <Header />
      <SearchComponent />
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
});
