import { Image, StyleSheet, View } from "react-native";

const Thumbnail = ({ url}) => {
  return (
    <View style={styles.imageWrap}>
      <Image
        source={url}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 24,
        }}
      />
    </View>
  );
};

export default Thumbnail;

const styles = StyleSheet.create({
  imageWrap: {
    height: 120,
    width: "100%",
    marginBottom: 20,
  },
  navigation: {
    padding: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 40,
    height: 30,
    position: "absolute",
    top: 24,
  },
});
