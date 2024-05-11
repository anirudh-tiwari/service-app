import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { categoryList, productsList } from "../utils";
import Header from "./header";
import Spotlight from "./spotlight";
import Category from "./category";
import Filters from "./filters";
import { useRoute } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
const headerWidth = (screenWidth - 32) / 2;

const HealthProduct = () => {
  const list = useRoute();
  const { type } = list?.params?.item;
  return (
    <View>
      <Header />
      <ScrollView
        stickyHeaderIndices={[3]}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <Image
          source={productsList[type].banner}
          style={{ height: 160, objectFit: "cover", width: "100%" }}
        />
        <Category type={type} />
        <View style={{ paddingHorizontal: 16 }}>
          <Text style={{ fontWeight: "600", fontSize: 18, color: "white" }}>
            Trending Near You
          </Text>
          <Text
            style={{
              fontWeight: "400",
              marginBottom: 10,
              fontSize: 14,
              color: "#858585",
            }}
          >
            Popular in your city
          </Text>
        </View>
        <Filters />
        <Spotlight type={type} />
      </ScrollView>
    </View>
  );
};

export default HealthProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 44,
  },
  icon: {
    alignSelf: "center",
    marginTop: 4,
  },
  filterText1: {
    fontSize: 12,
    fontWeight: "600",
    color: "white",
  },
  filterText2: {
    fontSize: 11,
    fontWeight: "400",
    color: "white",
  },
  border: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderBottomWidth: 0.4,
    borderColor: "white",
  },
  filter: {
    flexDirection: "row",
    gap: 6,
    width: headerWidth,
    alignItems: "center",
    justifyContent: "center",
  },
});
