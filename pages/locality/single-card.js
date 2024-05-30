import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useRef } from "react";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import { ContactDispatchers } from "../../store/features/contact";

const SingleCard = ({
  item,
  marginTop = 0,
  width = "100%",
  activeTag,
  itemIdx,
}) => {
  const [liked, setLiked] = useState(false);
  const scale = useRef(new Animated.Value(0)).current;
  const doubleTapRef = useRef(null);
  const { updateIssueVote } = ContactDispatchers();

  const handleDoubleTap = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      setLiked(!liked);
      updateIssueVote(itemIdx);
      Animated.spring(scale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(scale, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  return (
    <TapGestureHandler
      onHandlerStateChange={handleDoubleTap}
      numberOfTaps={2}
      ref={doubleTapRef}
    >
      <View style={styles.container}>
        <View
          style={[
            styles.card,
            {
              width: width,
              marginTop: marginTop,
            },
          ]}
          activeOpacity={1}
          onPress={() => {}}
        >
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
          <Text
            style={[
              styles.name,
              {
                textDecorationLine:
                  activeTag === "completed" ? "line-through" : "none",
              },
            ]}
          >
            {item.name}
          </Text>
          <Text
            style={[
              styles.description,
              {
                textDecorationLine:
                  activeTag === "completed" ? "line-through" : "none",
              },
            ]}
          >
            {item.description}
          </Text>
          <View style={[styles.iconWrapper, { marginTop: 12 }]}>
            <Image
              source={require("../../assets/map3.png")}
              style={styles.icon}
            />
            <Text style={[styles.iconText, { fontWeight: "600" }]}>
              {item.location}
            </Text>
          </View>
          {activeTag !== "completed" && (
            <View style={styles.iconContainer}>
              <View style={styles.iconWrapper}>
                <Image
                  source={require("../../assets/vote2.png")}
                  style={styles.icon}
                />
                <Text style={styles.iconText}>{item.vote}</Text>
              </View>
              <View style={styles.iconWrapper}>
                <Image
                  source={require("../../assets/discussion2.png")}
                  style={styles.icon}
                />
                <Text style={styles.iconText}>Debate</Text>
              </View>
              <View style={styles.iconWrapper}>
                <Image
                  source={require("../../assets/workers.png")}
                  style={styles.icon}
                />
                <Text style={[styles.iconText, { marginTop: 1 }]}>
                  {item.isPending ? "Pending" : "Assigned"}
                </Text>
              </View>
            </View>
          )}
          {liked && (
            <Animated.View
              style={[styles.likeIcon, { transform: [{ scale }] }]}
            >
              <Image
                source={require("../../assets/vote3.png")}
                style={{ height: 110, width: 110 }}
              />
            </Animated.View>
          )}
        </View>
      </View>
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginBottom: 20,
  },
  card: {
    borderRadius: 20,
    backgroundColor: "#252A32",
    padding: 12,
    paddingBottom: 16,
  },
  imageContainer: {
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    marginBottom: 2,
    marginTop: 12,
  },
  description: {
    fontSize: 12,
    fontWeight: "500",
    color: "#AEAEAE",
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 18,
    gap: 30,
  },
  iconWrapper: {
    flexDirection: "row",
    gap: 6,
  },
  icon: {
    width: 26,
    height: 26,
  },
  iconText: {
    color: "#AEAEAE",
    fontWeight: "500",
    alignSelf: "center",
    fontSize: 15,
  },
  likeIcon: {
    position: "absolute",
    top: "36%",
    left: "36%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});

export default SingleCard;
