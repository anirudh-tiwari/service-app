import { View, Text, TouchableOpacity, Image } from "react-native";
import { helpLine } from './utils';

const Helpline = () => {
  return (
    <View>
      <View style={{ height: 60, backgroundColor: "#EAFFF4" }}>
        {helpLine.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </View>
    </View>
  );
};

export default Helpline;

const Cards = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        gap: 8,
        marginBottom: 16,
        backgroundColor: item.bgColor,
        // flexWrap: 'wrap',
      }}
      onPress={() => navigation.navigate("")}
    >
      <View
        style={{
          width: 44,
          height: 44,
        }}
      >
        <Image
          source={item.icon}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            borderRadius: 12,
          }}
        />
      </View>
      <View style={{
         width: '47%',
      }}>
      <Text
        style={{
          fontSize: 13,
          fontWeight: "400",
          lineHeight: 18,
          color: "white",
          marginBottom: 2,
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: 11,
          fontWeight: "600",
          lineHeight: 18,
          color: "#858585",
          marginBottom: 4,
          width: '47%',
        }}
      >
        {item.number}
      </Text>
      </View>
    </TouchableOpacity>
  );
};