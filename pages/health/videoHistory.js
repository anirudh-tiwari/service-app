import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { cardData, departmentList } from "./utils";
import { Ionicons } from "@expo/vector-icons";

const VideoHistory = () => {
  navigation = useNavigation();

  return (
    <>
      <View style={styles.wrapper}>
        {cardData.Video.data.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </View>
    </>
  );
};

export default VideoHistory;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "black",
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

const Cards = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        gap: 6,
      }}
      onPress={() => navigation.navigate("")}
    >
      <View style={{
            width: "50%",
            height: 120,
            backgroundColor:"red"
            // objectFit: "contain",
            // borderRadius: 50,
          }}>
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: 20,
          }}
        />
        </View>
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
      {/* <View style={{ flexShrink: 1 }}>
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
      </View> */}
    </TouchableOpacity>
  );
};
