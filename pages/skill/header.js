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
          <Text style={styles.header}>
            Hello, Anirudh{" "}
            <Image
              source={require("../../assets/skill.png")}
              style={{ width: 30, height: 24 }}
            ></Image>
          </Text>
          <Text style={styles.description}>
            Learn from
            <Text style={{ fontWeight: "700" }}> skillful masters</Text>
          </Text>
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
    marginTop: 0,
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
