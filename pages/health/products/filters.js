import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const cardWidth = (screenWidth - 32) / 2;

const Filters = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={[styles.filter]}>
          <Ionicons
            name="funnel-outline"
            size={24}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.filterText1}>
            Sort by: <Text style={styles.filterText2}>Relevence</Text>
          </Text>
        </View>
        <View
          style={{
            width: 0.5,
            height: "70%",
            color: "#858585",
            backgroundColor: "white",
            alignSelf: "center",
          }}
        ></View>
        <View style={styles.filter}>
          <Ionicons
            name="filter-outline"
            size={24}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.filterText1}>Filters</Text>
        </View>
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "black",
    elevation: 80,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 44,
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    borderColor: "white",
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
