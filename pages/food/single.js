import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Single = () => {
  const category = useRoute();
  const [favourite, setFavourite] = useState(false);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [customizeList, setCustomizeList] = useState(["Onion"]);
  const { name, image, price, ingredients } = category?.params?.item;

  useEffect(() => {
    setIngredientsList( [...ingredients, "Onion"]);
  }, [ingredients]);

  const customizeHandle = (data) => {
    if (ingredientsList.includes(data) || customizeList.includes(data)) {
      const updatedList = ingredientsList.filter((list) => list !== data);
      const updatedCustomizeList = customizeList.filter(
        (list) => list !== data
      );
      setIngredientsList(updatedList);
      setCustomizeList(updatedCustomizeList);
    } else {
      setIngredientsList([...ingredientsList, data]);
      setCustomizeList([...customizeList, data]);
    }
  };

  return (
    <View style={{ width: "100%", flex: 1, backgroundColor: "black" }}>
      <View style={{ height: "60%", width: "100%" }}>
        <Image
          source={image}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <TouchableOpacity
          style={[styles.navigation, { left: 24 }]}
          onPress={() => navigation.navigate("FoodList")}
        >
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navigation, { right: 24 }]}
          onPress={() => setFavourite((prev) => !prev)}
        >
          <Image
            source={
              favourite
                ? require("../../assets/heart_fill.png")
                : require("../../assets/heart.png")
            }
            style={{
              width: 20,
              height: 20,
              tintColor: favourite ? "red" : "white",
            }}
          />
        </TouchableOpacity>
        <View style={styles.banner}>
          <View style={styles.bannerContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>With Steamed Milk</Text>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <Ionicons name="star" size={24} color="#D17842" />
              <Text style={styles.rating}>4.5</Text>
              <Text style={styles.ratingUser}>(6,879)</Text>
            </View>
          </View>
          <View
            style={[
              styles.bannerContainer,
              { flexDirection: "row", gap: 16, justifyContent: "flex-end" },
            ]}
          >
            <View style={styles.tags}>
              <Image
                source={require("../../assets/sugar.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "#D17842",
                }}
              />
              <Text style={{ color: "#AEAEAE" }}>Sugar</Text>
            </View>
            <View style={styles.tags}>
              <Image
                source={require("../../assets/maida.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "#D17842",
                }}
              />
              <Text style={{ color: "#AEAEAE" }}>Maida</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 12, paddingVertical: 16 }}>
        <Text style={styles.heading}>Ingredients</Text>
        <Text style={{marginTop: 4}}>
          {ingredientsList.map((ingredient, index) => {
            console.log("aniani", ingredient, customizeList);
            return (
              <Text
                key={index}
                style={[
                  styles.ingredients,
                  {
                    color: customizeList.includes(ingredient)
                      ? "#D17842"
                      : "#FFFFFF",
                  },
                ]}
              >
                {ingredient}
                {index < ingredientsList.length - 1 ? ", " : "."}
              </Text>
            );
          })}
        </Text>
        <Text style={[styles.heading, { marginTop: 18 }]}>Customize</Text>
        <View style={[styles.container, { marginTop: 6 }]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => customizeHandle("Onion")}
          >
            <Text
              style={[
                styles.buttonText,
                ingredientsList.includes("Onion") ? { color: "#F37B2D" } : {},
              ]}
            >
              Onion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => customizeHandle("Garlic")}
          >
            <Text
              style={[
                styles.buttonText,
                ingredientsList.includes("Garlic") ? { color: "#F37B2D" } : {},
              ]}
            >
              Garlic
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => customizeHandle("Yogurt")}
          >
            <Text
              style={[
                styles.buttonText,
                ingredientsList.includes("Yogurt") ? { color: "#F37B2D" } : {},
              ]}
            >
              Yogurt
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.container, { marginTop: 38, gap: 36 }]}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "#AEAEAE",
                alignSelf: "center",
              }}
            >
              Price
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "600",
                color: "white",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "600",
                  color: "#F37B2D",
                }}
              >
                रु{" "}
              </Text>
              {price}
            </Text>
          </View>
          <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate("Success")}>
            <Text style={[styles.buttonText2]}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Single;

const styles = StyleSheet.create({
  heading: {
    color: "#AEAEAE",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
  },
  container: {
    flexDirection: "row",
    gap: 16,
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#141921",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#D17842",
    height: 40,
    color: "#F37B2D",
    borderRadius: 12,
  },
  button2: {
    backgroundColor: "#D17842",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 20,
    width: 240,
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
  banner: {
    backgroundColor: "#00000080",
    opacity: 1,
    height: "28%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 24,
    flexDirection: "row",
  },
  bannerContainer: {
    flex: 1,
  },
  name: {
    color: "white",
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    color: "#AEAEAE",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    marginTop: 2,
  },
  rating: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    alignSelf: "center",
  },
  ratingUser: {
    color: "#AEAEAE",
    fontSize: 12,
    lineHeight: 24,
    fontWeight: "400",
    alignSelf: "center",
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
  tags: {
    backgroundColor: "#141921",
    height: 56,
    width: 56,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  ingredients: {
    color: "#FFFFFF",
    fontSize: 12,
    lineHeight: 20,
    fontWeight: "400",
    marginTop: 6,
  }
});
