import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
  navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.container1}>
          <Text style={styles.header}>Hello, Anirudh 🙏</Text>
          <Text style={styles.description}>
            Looking for
            <Text style={{ fontWeight: "700" }}> healthy options?</Text>
          </Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../../assets/profilePic.png")}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    color: "white",
    fontWeight: "500",
  },
  description: {
    fontSize: 18,
    color: "#858585",
    fontWeight: "400",
    marginTop: 2,
  },
  description2: {
    fontSize: 18,
    color: "green",
    fontWeight: "400",
    marginTop: 2,
  },
  container1: {
    flex: 10,
  },
});
