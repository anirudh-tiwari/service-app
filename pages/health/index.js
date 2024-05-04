import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import Video from "./video";
import Cards from "./cards";
import Header from "./header";
import Services from "./services";
import { cardData } from "./utils";

const Health = () => {
  return (
    <View style={styles.healthWrap}
    >
      <Header />
      <ScrollView stickyHeaderIndices={[2]}
      showsVerticalScrollIndicator={false}
      >
      <Video />
      <View style={styles.container}>
        <Text style={[styles.tag, { fontWeight: "600", marginBottom: 6 }]}>
          Service Category
        </Text>
        <Text style={[styles.tag, { color: "#0096FF" }]}>See All</Text>
      </View>
      <Services />
      <FlatList
        showsVerticalScrollIndicator={ false }
        data={cardData}
        numColumns={2}
        contentContainerStyle={{
          flexDirection: 'column',
          justifyContent: "space-between",
          marginTop: 4
        }}
        renderItem={({ item, index }) => {
          return <Cards item={item} />;
        }}
      />

      </ScrollView>
    </View>
  );
};

export default Health;

const styles = StyleSheet.create({
  healthWrap: {
    backgroundColor: "black",
    flex: 1,
    justifyConttent: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "sticky",
    zIndex: 999999,
    top: 0,
    marginBottom: 4
  },
  tag: {
    fontSize: 16,
    color: "white",
  },
});