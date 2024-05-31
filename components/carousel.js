import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "./button";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);
  navigation = useNavigation();

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    setActiveIndex(Math.round(index));
  };

  const lastSlide = data.length - 1 === activeIndex;

  const nextPage = () => {
    if (lastSlide) {
      navigation.navigate("FoodList");
    } else {
      const newIndex = (activeIndex + 1) % data.length;
      setActiveIndex(newIndex);
      scrollViewRef.current.scrollTo({ x: newIndex * width });
    }
  };

  const skipHandle = () => {
    const newIndex = (data.length - 1) % data.length;
    setActiveIndex(newIndex);
    scrollViewRef.current.scrollTo({ x: newIndex * width });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.scrollView}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.heading}>{item.heading}</Text>
            <Text
              style={item.class === "fixProblem" ? styles.solve : styles.text}
            >
              {item.text}
            </Text>
            <Text style={styles.points}>{item.solve}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text
          style={[styles.action, lastSlide ? { opacity: 0, height: 0 } : {}]}
          onPress={() => {
            setActiveIndex(data.length - 1);
            skipHandle();
          }}
        >
          Skip
        </Text>
        <View style={styles.pagination}>
          {data.map((_, index) => (
            <Text
              key={index}
              style={[
                styles.paginationDot,
                index === activeIndex && styles.activeDot,
              ]}
            >
              ⬤
            </Text>
          ))}
        </View>
        <Button
          backgroundColor="#F37B2D"
          borderRadius={50}
          onPress={() => nextPage()}
          text={lastSlide ? "Done" : "Next"}
        ></Button>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    width,
  },
  slide: {
    flex: 1,
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200, // Adjust as needed
    objectFit: "cover",
  },
  heading: {
    fontSize: 32,
    marginTop: 20,
    alignSelf: "center",
    fontWeight: "500",
    color: "black",
  },
  text: {
    fontSize: 16,
    alignSelf: "center",
    color: "#676767",
    width: "85%",
    textAlign: "center",
  },
  solve: {
    fontSize: 17,
    color: "green",
    width: "90%",
    textAlign: "center",
    marginVertical: 4,
  },
  points: {
    fontSize: 15,
    color: "red",
    width: "90%",
    textAlign: "center",
    fontWeight: "500",
  },
  pagination: {
    flexDirection: "row",
    marginLeft: 20,
    // position: "absolute",
    // bottom: 20,
  },
  paginationDot: {
    margin: 3,
    fontSize: 18,
    color: "#888",
  },
  activeDot: {
    color: "black",
  },
  action: {
    fontSize: 17,
    color: "grey",
    textAlign: "center",
  },
  nextPage: {
    fontSize: 17,
    color: "grey",
    textAlign: "center",
    fontWeight: "400",
    color: "#F37B2D",
  },
  footer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});

export default Carousel;

const data = [
  {
    image: require("../assets/electricity.png"),
    heading: "Healthy Kitchen",
    text: "Enjoy healthier versions of your favorite meals without sacrificing taste.",
  },
  {
    image: require("../assets/liveFood.png"),
    heading: "Live Webcam",
    text: "Watch live your healthy meal being made on a webcam",
  },
  {
    image: require("../assets/customizeFood.png"),
    heading: "Customize Meals",
    text: "Design your nutritious meal with our customization features.",
  },
  {
    image: require("../assets/fixEating.png"),
    heading: "Fix Problem",
    class: "fixProblem",
    text: "Sweetened without sugar, no Maida, full of fiber, natural ingredients, and healthy fats can solve: ",
    solve:
      "Overweight, Type 2 diabetes, PCOD, Digestive system, Heart ( Cardiovascular disease, High B.P & Cholesterol ), Stroke, e.t.c",
    points: [
      "Overweight & Obesity",
      "Type 2 diabetes",
      "Heart ( Cardiovascular disease, High B.P & Cholesterol )",
      "PCOD/PCOS",
      "Osteoporosis",
      "Eating disorders",
      "Almost all",
    ],
  },
];
