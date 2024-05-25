import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

const Tags = ({ listData, activeTag, setActiveTag }) => {
  return (
    <View style={{ backgroundColor: "black" }}>
      <View style={{ marginBottom: 16 }} 
        stickyHeaderIndices={[0]}
      >
        <FlatList
          data={listData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  marginRight: 9,
                  width: 92,
                  height: 30,
                  paddingVertical: 0,
                  paddingHorizontal: 0,
                  backgroundColor: activeTag === item.key ? item.bgColor : 'black',
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: item.bgColor,
                }}
                onPress={() => setActiveTag(item.key)}
              >
                <Text
                  style={{
                    color: activeTag === item.key ? item.color : item.bgColor,
                    fontWeight: activeTag === item.key ? "700" : "500",
                    fontSize: 15,
                  }}
                >
                  { item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Tags;

