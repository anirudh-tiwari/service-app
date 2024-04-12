import { View, Text } from 'react-native'
import Category from '../components/category'
import * as Animatable from 'react-native-animatable';

const Home = () => {
  return (
   <Animatable.View animation="fadeInUp" duration={1000}>
    <View style={{
        paddingHorizontal: 16,
        paddingVertical: 32,
    }}>
    <View style={{
        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap'
    }}>
      <Category item={{
        name: 'ann',
        image: require('../assets/HealthCare.png')
      }} />
      <Category item={{
        name: 'ann',
        image: require('../assets/curroption.png')
      }} />
      <Category item={{
        name: 'ann',
        image: require('../assets/family.png')
      }} />
      <Category item={{
        name: 'ann',
        image: require('../assets/curroption.png')
      }} />
      <Category item={{
        name: 'ann',
        image: require('../assets/family.png')
      }} />
      <Category item={{
        name: 'ann',
        image: require('../assets/curroption.png')
      }} />
      <Category item={{
        name: 'ann',
        image: require('../assets/family.png')
      }} />
      <Category item={{
        name: 'ann',
        image: require('../assets/curroption.png')
      }} />
    </View>
    </View>
    </Animatable.View>
  )
}

export default Home