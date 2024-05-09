import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { tagsData } from "./utils";

const Services = ({activeTag,setActiveTag}) => {
  return (
    <View style={{backgroundColor: "black"}}>
      <View style={{ marginBottom: 16 }}>
        <FlatList
          data={tagsData}
          horizontal
          stickyHeaderIndices={[1]}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  marginRight: 18,
                  width: 68,
                  height: 66,
                  backgroundColor: "#252A32",
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 12,
                  borderWidth: 1,
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

