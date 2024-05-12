import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

const Services = ({ listData, activeTag, setActiveTag }) => {
  return (
    <View style={{ backgroundColor: "black" }}>
      <View style={{ marginBottom: 16 }}>
        <FlatList
          data={listData}
          horizontal
          stickyHeaderIndices={[1]}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  marginRight: item.time ? 10 : 18,
                  width: item.time ? "auto" : 68,
                  height: item.time ? "auto" : 66,
                  paddingVertical: item.time ? 6 : 0,
                  paddingHorizontal: item.time ? 8 : 0,
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
                {item.date ? (
                  <Text
                    style={{
                      color: activeTag === item.key ? "#0096FF" : "gray",
                      fontWeight: "500",
                      fontSize: 24,
                      lineHeight: 24,
                    }}
                  >
                    {item.date}
                  </Text>
                ) : (
                  item.icon ? 
                  <Image source={item.icon} style={{ width: 30, height: 30 }} /> : null
                )}
                <Text
                  style={{
                    color: activeTag === item.key ? "#0096FF" : "gray",
                    fontWeight: "500",
                    marginTop: item.date || item.time ? 0 : 8,
                  }}
                >
                  { item.time ? item.time : item.name}
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

