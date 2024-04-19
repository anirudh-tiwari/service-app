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
        <View>
          <Text style={styles.header}>Hello, Anirudh 🙏</Text>
          <Text style={styles.description}>What you want eat today?</Text>
        </View>
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
});
