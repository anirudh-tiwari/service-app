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

import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { skills } from './utils';
import SearchComponent from '../../components/Search';

const Skill = ({ navigation }) => {
    const renderSkill = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Curriculum', { skill: item })}>
            <Image source={require('../../assets/srk.jpg')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hey Anirudh, Find a course you want to learn</Text>
            <SearchComponent />
            <FlatList
                data={skills}
                renderItem={renderSkill}
                keyExtractor={item => item.name}
                contentContainerStyle={styles.cardsContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333'
    },
    cardsContainer: {
        paddingBottom: 20
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5
    },
    cardImage: {
        width: '100%',
        height: 150,
        objectFit: "fill"
        // resizeMode: 'cover'
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        padding: 15
    }
});

export default Skill;
