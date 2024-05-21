import { View, Text, Image, StyleSheet } from "react-native";

const Gravatar = ({ title, size = 26, count = 0 }) => {
  const avatarURL =
    // 'https://www.gravatar.com/avatar/b7b8bf00b9618e1bac0693a10a4d7349?s=24&d=blank';
    "https://www.gravatar.com/avatar/d4650d7c6718b5f38a31d20664f9b3cf?s=24&d=blank";

  return (
    <View style={[styles.gravatarWrapper,{marginRight: count ? 30 : 8 }]}>
      <Image
        source={{ uri: avatarURL }}
        style={[styles.gravatar, { width: size, height: size }]}
        title={title}
      />
      {count ? (
        <View style={[styles.gravatarCount, { width: size }]}>
          <Text style={{ color: "white" }}>{count}+</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  gravatarWrapper: {
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "center",
    marginTop: 22,
  },
  gravatar: {
    borderRadius: 6,
    marginRight: 10,
  },
  gravatarCount: {
    backgroundColor: "#676D75",
    height: 26,
    width: 26,
    position: "absolute",
    left: "60%",
    padding: "4px 2px",
    borderRadius: 4,
    border: "1px solid white",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
});

export default Gravatar;
