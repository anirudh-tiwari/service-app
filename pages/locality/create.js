import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const Create = () => {
  const image = useRoute();
  const { img } = image?.params;

  console.log('aniimage',image)

  return (
    <View style={styles.createWrapper}>
      <Text>Create2</Text>
              {img && <Image source={{ uri: img }} style={{
          width: 200,
          height: 200,
        }} />}
    </View>
  )
}

export default Create

const styles = StyleSheet.create({
    createWrapper : {
        flex: 1,
        backgroundColor: "black",
    }
})