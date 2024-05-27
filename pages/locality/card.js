import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Cards = ({ item, marginTop = 0, width = "100%" }) => {
  navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        width: width,
        marginRight: 14,
        marginTop: marginTop,
        backgroundColor: "#252A32",
        marginBottom: 20,
        height: 160,
      }}
      onPress={() => navigation.navigate("SingleDoctor")}
      activeOpacity={0.8}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 0,
            objectFit: "cover",
            borderRadius: 20,
          }}
        />
        <View style={styles.banner}>
          <Text style={styles.description}>{item.name}</Text>
          <View style={styles.iconContainer}>
            <View style={[styles.iconWrapper]}>
              <Image
                source={require("../../assets/vote.png")}
                style={[styles.icon]}
              />
              <Text style={[styles.iconText]}>{item.vote}</Text>
            </View>
            <View style={[styles.iconWrapper]}>
              <Image
                source={require("../../assets/workers.png")}
                style={[styles.icon]}
              />
              <Text style={[styles.iconText]}>{ item.isPending ? "Pending" : "Assigned" }</Text>
            </View>
          </View>
        </View>
        <View style={styles.priorityTag}>
          <Text style={styles.priorityText}>Priority</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({
  iconContainer: { flexDirection: "row", marginTop: 5, gap: 30 },
  iconWrapper: { flexDirection: "row", gap: 6 },
  icon: {
    width: 22,
    height: 22,
    // tintColor: "white",
    borderRadius: 0,
    objectFit: "cover",
    // borderRadius: 20,
  },
  iconText: {
    color: "white",
    fontWeight: "600",
    alignSelf: "center",
    fontSize: 15,
  },
  banner: {
    backgroundColor: "#00000080",
    opacity: 1,
    height: "auto",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    padding: 2,
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  bannerContainer: {
    flex: 1,
  },
  description: {
    color: "white",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "900",
    marginTop: 2,
  },
  priorityTag : {
    backgroundColor: "#5ba238",
    height: "auto",
    width:68,
    position: "absolute",
    right: 6,
    top: 6,
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12
  },
  priorityText: {
    color: "white",
    fontWeight: "500"
  }
});
