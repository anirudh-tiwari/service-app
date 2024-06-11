// import { View, Text } from 'react-native'
// import Curriculum from './Curriculum'

// const Skill = () => {
//   return (
//     <View style={{flex:1, backgroundColor: "black"}}>
//       <Curriculum />
//     </View>
//   )
// }

// export default Skill

// navigation.navigate('Curriculum', { skill: item })
// require('../../assets/srk.jpg')

import SearchComponent from '../../components/Search';
import { skills } from './utils';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomePage = ({ navigation }) => {
  const renderSkillCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Curriculum', { curriculum: item.curriculum })}>
      <Image source={require('../../assets/srk.jpg')} style={styles.image} />
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCategory = ({ item }) => (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>{item.category}</Text>
      </View>
      <FlatList
        data={item.skills}
        renderItem={renderSkillCard}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.skillList}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <Text style={styles.header}>Hey Anirudh, Find a course you want to learn</Text>
            {/* Assuming SearchComponent is imported and available */}
            <SearchComponent />
          </>
        )}
        data={skills}
        renderItem={renderCategory}
        keyExtractor={(item) => item.category}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background color
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    color: '#fbd957', // Primary color
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 30,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 20,
    color: '#fbd957', // Primary color
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    color: '#ff6347', // Tomato color for "View All" text
    textDecorationLine: 'underline',
  },
  skillList: {
    paddingLeft: 5,
  },
  card: {
    backgroundColor: '#1e1e1e', // White background for cards
    borderRadius: 15, // Rounded corners
    marginRight: 15,
    overflow: 'hidden',
    width: 140,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5, // Shadow for Android
  },
  image: {
    width: 100,
    height: 110,
    resizeMode: 'contain', // Ensures the image fits within the given dimensions
    // marginBottom: 10,
  },
  cardTitleContainer: {
    backgroundColor: '#333', // Background color for card title
    paddingVertical: 7,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000', // Black text color
  },
});

export default HomePage;

