import { View, Image } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 1000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 250, height: 250 }}
      />
    </View>
  );
};

export default Splash;
