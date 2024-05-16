import { View, Text, StyleSheet } from 'react-native'
import Footer from './footer'

const Security = () => {
  return (
    <View style={styles.Wrapper}>
      <Text>Security</Text>
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
        paddingTop: 24,
      },
})