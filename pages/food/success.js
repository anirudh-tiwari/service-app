import { useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const Success = () => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Live")
    }, 200);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Image
        source={require("../../assets/success1.png")}
        style={styles.image}
      />
      <View style={{ alignItems: "center", paddingHorizontal: 36 }}>
        <Text style={{ fontSize: 32, color: "white", fontWeight: "800" }}>
          Order Successful
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "gray",
            textAlign: "center",
            fontWeight: "600",
            marginTop: 4,
          }}
        >
          Once your order is placed, We'll offer live video coverage of the
          preparation process.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={[styles.buttonText2]}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 20,
    objectFit: "contain",
    resizeMode: "cover",
    marginTop: 42,
  },
  button: {
    backgroundColor: "#D17842",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 20,
    width: 280,
    marginTop: 18,
  },
  buttonText: {
    color: "#AEAEAE",
    fontSize: 16,
  },
  buttonText2: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
