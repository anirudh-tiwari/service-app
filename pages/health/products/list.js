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
import { categoryList } from "../utils";
import Header from "./header";
import Spotlight from "./spotlight";
import Category from "./category";

const screenWidth = Dimensions.get("window").width;
const headerWidth = (screenWidth - 32) / 2;

const HealthProduct = () => {
  return (
    <ScrollView
    stickyHeaderIndices={[0]}
    showsVerticalScrollIndicator={false}
    style={styles.container}
    >
        <Header />
        <Image
          source={require("../../../assets/vitaminBanner.jpeg")}
          style={{ height: 160, objectFit: "cover", width: "100%" }}
        />
        <Category />
      <Spotlight />
    </ScrollView>
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
