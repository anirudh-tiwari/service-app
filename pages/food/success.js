import { useRoute } from "@react-navigation/native";
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

const ListItem = ({ text }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.bullet}>•</Text>
      <Text style={{color: "white"}}>{text}</Text>
    </View>
  );
};

const Success = () => {
  const category = useRoute();
  const [showVideo, setShowVideo] = useState(false);
  const { name, image, ingredients } = category?.params?.item;

  useEffect(() => {
    setTimeout(() => {
      setShowVideo(true);
    }, 3000);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {showVideo ? (
        <View style={{ height: "60%", width: "100%" }}>
          <Image
            source={image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <View style={styles.curve} />
          {/* <TouchableOpacity
            style={[styles.navigation, { left: 24 }]}
            onPress={() => navigation.navigate("FoodList")}
          >
            <Ionicons name="chevron-back-outline" size={24} color="white" />
          </TouchableOpacity> */}
          <TouchableOpacity
            style={[styles.navigation, { top: "50%", left: "44%" }]}
            // onPress={() => {}}
          >
            <Image
              source={require("../../assets/play-circle.png")}
              style={{
                width: 50,
                height: 50,
                objectFit: "cover",
              }}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <Image
          source={require("../../assets/success1.png")}
          style={styles.image}
        />
      )}
      <TouchableOpacity
        style={[styles.navigation, { left: 24 }]}
        onPress={() => navigation.navigate("FoodList")}
      >
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </TouchableOpacity>
      {showVideo ? (
        <View style={{ paddingHorizontal: 24 }}>
          <Text
            style={{
              fontSize: 32,
              color: "white",
              fontWeight: "800",
            }}
          >
            {name}
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#404249",
              marginVertical: 12,
            }}
          ></View>
          <Text
            style={{
              fontSize: 22,
              color: "white",
              fontWeight: "800",
              marginBottom: 12
            }}
          >
            Ingredeints
          </Text>
          <FlatList
            data={ingredients}
            renderItem={({ item }) => <ListItem text={item} />}
            numColumns={2}
            contentContainerStyle={styles.container}
          />
        </View>
      ) : (
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
      )}
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "54%",
    borderRadius: 20,
    objectFit: "contain",
    resizeMode: "cover",
    marginTop: 88,
    borderRadius: 20,
    marginBottom: -40,
    overflow: "hidden",
  },
  curve: {
    width: "100%",
    height: "10%",
    backgroundColor: "#00000080",
    opacity: 1,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    position: "relative",
    top: -38, // Adjust this value to control the curve position
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
  navigation: {
    borderWidth: 0.5,
    padding: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#21262E",
    width: 40,
    height: 30,
    position: "absolute",
    top: 24,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    color: "#FFF"
  },
  bullet: {
    marginRight: 10,
    fontSize: 20,
    color: "white",
  },
});
