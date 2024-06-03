import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from "react-native";

const Banner = ({ containerWidth }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);
  
  const data = [
    {
      image: require("../assets/electricity.png"),
    },
    {
      image: require("../assets/waterBanner.png"),
    },
    {
      image: require("../assets/roadMaintainance.png"),
    },
    {
      image: require("../assets/garbage.png"),
    },
    {
      image: require("../assets/environment.png"),
    },
  ];

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(event.nativeEvent.contentOffset.x / slideSize);
    setActiveIndex(index);
  };

  const scrollToNext = () => {
    const newIndex = (activeIndex + 1) % data.length;
    setActiveIndex(newIndex);
    scrollViewRef.current.scrollTo({ x: newIndex * containerWidth, animated: true });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToNext();
    }, 1600);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={[styles.scrollView, { width: containerWidth }]}
      >
        {data.map((item, index) => (
          <View key={index} style={[styles.slide, { width: containerWidth }]}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 0,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 24,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
  },
  paginationDot: {
    margin: 3,
    fontSize: 14,
    color: "black",
  },
  activeDot: {
    color: "white",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Banner;
