import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { departmentList } from "./utils";
import Header from "./products/header";
import Filters from "./products/filters";

const Doctor = () => {
  const category = useRoute();
  const { name } = category?.params;

  navigation = useNavigation();

  return (
    <>

      <View style={styles.wrapper}>
        <Header title={`${ name }`} />
        <Filters />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={departmentList}
          contentContainerStyle={{marginVertical: 24}}
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
    flex: 1
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
