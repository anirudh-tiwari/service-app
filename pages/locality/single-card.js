import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SingleCard = ({ item, marginTop = 0, width = "100%" }) => {
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
        height: 344,
        padding: 12,
      }}
      onPress={() => navigation.navigate("SingleDoctor")}
    >
      <View
        style={{
          height: 200,
        }}
      >
        <Image
          //   source={item.image}
          source={require("../../assets/pathole.jpg")}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 0,
            objectFit: "cover",
            borderRadius: 20,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: "white",
          marginBottom: 2,
          marginTop: 12,
        }}
      >
        {/* {item.name} */}
        Pothole
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          color: "#AEAEAE",
        }}
      >
        {/* {item.desc} */}A large pothole has formed on Main Street near | |
        the intersection with 2nd Avenue. It's causing | | significant traffic
        issues and needs immediate | | attention.
      </Text>
      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <Image
            source={require("../../assets/vote2.png")}
            style={styles.icon}
          />
          <Text style={styles.iconText}>1200</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Image
            source={require("../../assets/discussion2.png")}
            style={styles.icon}
          />
          <Text style={styles.iconText}>Debate</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Image
            source={require("../../assets/workers.png")}
            style={styles.icon}
          />
          <Text style={styles.iconText}>Pending</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SingleCard;

const styles = StyleSheet.create({
  iconContainer: { flexDirection: "row", marginTop: 16, gap: 30 },
  iconWrapper: { flexDirection: "row", gap: 6 },
  icon: {
    width: 26,
    height: 26,
    // tintColor: "white",
    borderRadius: 0,
    objectFit: "cover",
    // borderRadius: 20,
  },
  iconText: {
    color: "#AEAEAE",
    fontWeight: "500",
    alignSelf: "center",
    fontSize: 15,
  },
});
