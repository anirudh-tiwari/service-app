import { View, Text, StyleSheet, Image } from 'react-native'
// import Carousel from '../../components/carousel';

const Health = () => {
  return (
    <View style={styles.healthWrap}>
    <Image source={require('../../assets/thumbnil.png')} style={{
      height: 160,
      width: '100%',
      objectFit: "cover",
      borderRadius: 24,
    }} />
    </View>
  )
}

export default Health;

const styles = StyleSheet.create({
    healthWrap : {
        backgroundColor : 'black',
        flex: 1,
        justifyConttent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 24,
    }
})