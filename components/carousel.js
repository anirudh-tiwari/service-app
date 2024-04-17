const data = [
  {
    image: require("../assets/eatingHealthy.png"),
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
    class:'fixProblem',
    text: "Sweetened without sugar, no Maida, full of fiber, natural ingredients, and healthy fats can solve: ",
    points: [
      "Overweight & Obesity",
      "Type 2 diabetes",
      "Heart ( Cardiovascular disease, High B.P & Cholesterol )",
      "PCOD/PCOS",
      "Osteoporosis",
      "Eating disorders",
      "Almost all"
    ],
  },
];

import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    setActiveIndex(Math.round(index));
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
            <Text style={ item.class === 'fixProblem' ? styles.solve : styles.text }>{item.text}</Text>
            {Array.isArray(item?.points) &&
              item?.points.map((point) => {
                return (
                  <>
                    {/* <Text style={styles.text}>{point.error}</Text> */}
                    <Text style={styles.points}>{point}</Text>
                  </>
                );
              })}
          </View>
        ))}
      </ScrollView>
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
    fontSize: 16,
    alignSelf: "center",
    color: "green",
    width: "85%",
    textAlign: "center",
  },
  points: {
    fontSize: 13,
    alignSelf: "flex-start",
    color: "red",
    width: "100%",
    textAlign: "left",
    fontWeight: '500',
    marginLeft: '4%'
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
  },
  paginationDot: {
    margin: 3,
    fontSize: 18,
    color: "#888",
  },
  activeDot: {
    color: "black",
  },
});

export default Carousel;
