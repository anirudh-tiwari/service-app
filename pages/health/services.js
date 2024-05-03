import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { tagsData } from "./utils";
import { useState } from "react";

const Services = () => {
  const [activeTag, setActiveTag] = useState("all");

  return (
    <View>
      <View style={styles.container}>
        <Text style={[styles.tag, { fontWeight: "600" }]}>
          Service Category
        </Text>
        <Text style={[styles.tag, { color: "#0096FF" }]}>See All</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <FlatList
          data={tagsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                // style={{
                //   height: 36,
                //   // width: 88,
                //   borderRadius: 20,
                //   borderWidth: 1,
                //   // justifyContent: "center",
                //   alignItems: "center",
                //   marginLeft: index ? 10 : 0,
                //   backgroundColor:
                //     activeTag === item.key ? "#0F67FE" : "#FEDAD1",
                //   flexDirection: "row",
                //   gap: 3,
                //   padding: 3,
                //   paddingRight: 8
                // }}
                style={{
                  marginRight: 14,
                  width: 66,
                  height: 66,
                  backgroundColor: "#252A32",
                  marginTop: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 12,
                  borderWidth: 1,
                  // borderColor: activeTag === item.key ?  "#5CE1E6" : "#252A32",
                  borderColor: activeTag === item.key ? "#0096FF" : "#252A32",
                }}
                onPress={() => setActiveTag(item.key)}
              >
                <Image source={item.icon} style={{ width: 30, height: 30 }} />
                <Text
                  style={{
                    color: activeTag === item.key ? "#0096FF" : "gray",
                    fontWeight: "500",
                    marginTop: 8,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  imgWrapper: {
    height: 30,
    width: 30,
    backgroundColor: "white",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    // width: "100%",
    // height: "100%",
    width: 24,
    height: 24,
  },
  tag: {
    fontSize: 16,
    color: "white",
  },
});
