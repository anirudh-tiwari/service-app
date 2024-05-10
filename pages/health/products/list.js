import {
    View,
    TouchableOpacity,
    Text,
    Image,
    Dimensions,
    StyleSheet,
  } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import { categoryList } from "../utils";
import Header from "./header";
  
  const HealthProduct = () => {
    return (
      <>
      <Header />
        <View style={styles.container}>
          <Text style={{ fontWeight: "600", marginBottom: 8, fontSize: 18, color: "white" }}>
            Popular Category
          </Text>
        <View style={styles.wrapper}>
          {categoryList.Checkup.data.map((item, index) => {
            return <Cards item={item} key={index} />;
          })}
        </View>
        </View>
      </>
    );
  };
  
  export default HealthProduct;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      flex: 1,
      paddingHorizontal: 16
    },
    wrapper: {
      backgroundColor: "black",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 4,
      columnGap: 10,
      flexWrap: "wrap",
      flex: 1
    },
  });
  
  const Cards = ({ item }) => {
    const screenWidth = Dimensions.get("window").width;
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
  