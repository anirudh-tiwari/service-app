import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Cards = ({
cards,
  item,
  marginTop = 0,
  hasCart = false,
  hasWhishList = false,
}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleScroll = (event) => {
      const { contentOffset } = event.nativeEvent;
      const page = Math.round(contentOffset.x / screenWidth);
      setCurrentPage(page);
    };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={200}
      >
        {cards.map((card, index) => (
          <View key={index} style={styles.card}>
            {/* Render your card component here */}
            {card}
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {Array.from({ length: Math.ceil(cards.length / 2) }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentPage ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    },
    card: {
      width: screenWidth/2, // Adjust card width as needed
      marginHorizontal: 10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: "100%",
      height: "100%",
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    //   marginTop: 10,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#ccc',
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: 'blue',
    },
  });