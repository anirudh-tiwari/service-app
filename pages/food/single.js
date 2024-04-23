import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

const Single = () => {
  const category = useRoute();
  const [activeBtn, setActiveBtn] = useState(0);
  const { name, image } = category?.params?.item;

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
        <View style={styles.banner}>
          <View style={styles.bannerContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>With Steamed Milk</Text>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 8}}>
          <Ionicons name="star" size={24} color="#D17842" />
          <Text style={styles.rating}>4.5</Text>
          <Text style={styles.ratingUser}>(6,879)</Text>
          </View>
          </View>
          <View style={[styles.bannerContainer,{alignItems:"center"}]}>
            <Text>sdcsdc</Text>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 12, paddingVertical: 16 }}>
        <Text style={styles.heading}>Ingredients</Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 12,
            lineHeight: 20,
            fontWeight: "400",
            marginTop: 12,
          }}
        >
          Whole Wheat Flour, Besan, Turmeric Powder, Ghee, Oil
        </Text>
        <Text style={[styles.heading, { marginTop: 12 }]}>Size</Text>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setActiveBtn(0)}
          >
            <Text
              style={[
                styles.buttonText,
                activeBtn === 0 ? { color: "#F37B2D" } : {},
              ]}
            >
              Button 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setActiveBtn(1)}
          >
            <Text
              style={[
                styles.buttonText,
                activeBtn === 1 ? { color: "#F37B2D" } : {},
              ]}
            >
              Button 2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setActiveBtn(2)}
          >
            <Text
              style={[
                styles.buttonText,
                activeBtn === 2 ? { color: "#F37B2D" } : {},
              ]}
            >
              Button 3
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text>Proce</Text>
          <TouchableOpacity
            style={styles.button2}
          >
            <Text
              style={[
                styles.buttonText2,
              ]}
            >
              Add to Cart
            </Text>
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
    marginTop: 16,
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
    height: "30%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 24,
    flexDirection: 'row'
  },
  bannerContainer: {
    flex: 1
  },
  name: {
    color: "white",
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "600",
  },
  description: {
    color: "#AEAEAE",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    marginTop: 2
  },
  rating: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    alignSelf: 'center'
  },
  ratingUser: {
    color: "#AEAEAE",
    fontSize: 12,
    lineHeight: 24,
    fontWeight: "400",
    alignSelf: 'center'
  }
});
