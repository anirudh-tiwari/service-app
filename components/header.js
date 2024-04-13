import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
      setTime("Good morning,");
    } else if (currentTime < 18) {
      setTime("Good afternoon,");
    } else {
      setTime("Good evening,");
    }
  }, []);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 8,
          }}
        >
          <Image
            source={require("../assets/map.png")}
            style={{
              width: 24,
              height: 24,
              tintColor: "#ff6e00",
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            V-32, Arvind Nagar, Delhi
          </Text>
        </View>
        <Image
          source={require("../assets/profilePic.png")}
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
          }}
        />
      </View>
      <Text style={styles.userName}>{time}</Text>
      <Text style={styles.userName}>Anirudh 🙏</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  userName: {
    fontSize: 28,
    color: "white",
    fontWeight: "500",
  },
});
