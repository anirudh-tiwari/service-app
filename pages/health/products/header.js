import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const cardWidth = (screenWidth - 32) / 2;

const Header = ({title}) => {
  return (
    <View style={styles.wrapper}>
      <View style={{ position: "relative", paddingHorizontal: 12 }}>
        <View style={styles.container1}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color="white"
              style={styles.icon}
            />
            <Text style={{ fontWeight: "600", fontSize: 18, color: "white" }}>
              { title }
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 14 }}>
            <Ionicons
              name="search-outline"
              size={24}
              color="white"
              style={styles.icon}
            />
            <Ionicons
              name="cart-outline"
              size={24}
              color="white"
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.border}></View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 6,
    backgroundColor: "black",
    elevation: 80,
    // paddingBottom: 16,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    // height: 44,
    height: 54
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
    width: cardWidth,
    alignItems: "center",
    justifyContent: "center",
  },
});
