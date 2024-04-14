import { View, Text, StyleSheet } from 'react-native'
import Carousel from '../components/carousel';

const Food = () => {
  return (
    <View style={ styles.foodWrap }>
      <Text>Food</Text>
      <Carousel />
    </View>
  )
}

export default Food;

const styles = StyleSheet.create({
    foodWrap : {
        backgroundColor : '#EFD8D1',
        flex: 1,
        justifyConttent: 'center',
    }
})