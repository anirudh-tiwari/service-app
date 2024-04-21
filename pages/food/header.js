import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
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
          <Text style={styles.description}>Looking for healthy options?</Text>
        </View>
        <View style={styles.container2}>
        <Image
          source={require("../../assets/profilePic.png")}
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
          }}
        />
        </View>
      </View>
      {/* <Text style={styles.description2}>No sugar, no maida, high fiber, healthy fats & all organic ingredients.</Text> */}
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
    marginTop: 2
  },
  description2: {
    fontSize: 18,
    color: "green",
    fontWeight: "400",
    marginTop: 2,
  },
  container1: {
    flex: 10
  }
});
