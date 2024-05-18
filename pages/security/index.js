import { View, Text, StyleSheet } from 'react-native'
import Footer from './footer'
import Header from './header'
import Helpline from './helpline'

const Security = () => {
  return (
    <View style={styles.Wrapper}>
      <Header />
      {/* <View style={styles.bodyRadius}></View> */}
      <Helpline />
      <Footer />
    </View>
  )
}

export default Security

const styles = StyleSheet.create({
    Wrapper: {
        backgroundColor: "black",
        flex: 1,
        justifyConttent: "center",
        // position: "relative"
      },
      bodyRadius: {
        borderRadius: 40,
        backgroundColor: "black",
        height: 66,
        position: "relative",
        top: -40,
        zIndex:0,
      }
})