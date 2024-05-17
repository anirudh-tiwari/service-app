import { View, Text } from "react-native";

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
        // flexWrap: 'wrap',
      }}
      onPress={() => navigation.navigate("")}
    >
      <View
        style={{
          width: "50%",
          height: 100,
        }}
      >
        <Image
          source={item.image}
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
        {item.views} views
      </Text>
      </View>
    </TouchableOpacity>
  );
};