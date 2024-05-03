import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

const Video = () => {
  return (
    <View style={styles.imageWrap}>
      <Image
        source={require("../../assets/thumbnil.png")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 24,
        }}
      />
      <TouchableOpacity
        style={[styles.navigation, { top: "50%", left: "42%" }]}
      >
        <Image
          source={require("../../assets/play-circle.png")}
          style={{
            width: 50,
            height: 50,
            objectFit: "cover",
            opacity: 0.4
          }}
        />
      </TouchableOpacity>
      </View>
  )
}

export default Video;

const styles = StyleSheet.create({
    imageWrap: {
      height: 160,
      width: "100%",
      marginBottom: 20
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