import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { departmentList } from "./utils";
import { Ionicons } from "@expo/vector-icons";

const Doctor = () => {
  navigation = useNavigation();

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.HeaderWrapper}>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color="white"
            style={{ alignSelf: "center", marginTop: 4 }}
          />
          <Text style={styles.header}>Departments (Aiims)</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={departmentList}
          renderItem={({ item, index }) => {
            return <Cards item={item} />;
          }}
        />
      </View>
    </>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "black",
    paddingHorizontal: 14,
  },
  HeaderWrapper: {
    flexDirection: "row",
    marginVertical: 16,
    gap: 10,
  },
  header: {
    color: "white",
    fontSize: 24,
  },
});

const Cards = ({ item, marginTop = 0 }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        width: "100%",
        marginRight: 14,
        marginTop: marginTop,
        backgroundColor: "#252A32",
        marginBottom: 20,
        height: 140,
      }}
      onPress={() => navigation.navigate("Doctor")}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          padding: 8,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Image
          source={item.image}
          style={{
            width: "38%",
            height: "100%",
            borderRadius: 0,
            objectFit: "cover",
            borderRadius: 20,
          }}
        />
        <View style={{ flexShrink: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "white",
              marginBottom: 4,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: "#AEAEAE",
            }}
          >
            {item.desc}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
