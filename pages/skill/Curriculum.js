import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { curriculum } from './utils';

const Curriculum = ({ route }) => {
  const { classKey } = route.params;
  const classData = curriculum[classKey];

  return (
    <ScrollView style={styles.container}>
      {classData.chapters.map((chapter, index) => (
        <View key={index} style={styles.chapter}>
          <Text style={styles.chapterTitle}>{chapter.title}</Text>
          {chapter.topics.map((topic, topicIndex) => (
            <Text key={topicIndex} style={styles.topic}>
              {topic}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  chapter: {
    marginBottom: 20,
  },
  chapterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  topic: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default Curriculum;
