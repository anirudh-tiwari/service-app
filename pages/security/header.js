import { View, Text, StyleSheet, Image } from 'react-native'

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
        <View style={styles.container}>
        <Image
            source={require("../../assets/safe.png")}
            style={{
              width: 30,
              height: 30,
            //   tintColor: "green" :,
            }}
          />
      <Text style={styles.heading}>I'M SAFE</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerWrapper: {
        height: 110,
        backgroundColor: "#013220",
    },
    container: {
        flexDirection: "row",
        gap: 8,
        marginTop: 18,
        marginLeft: 12
    },
    heading: {
        color:"#C7F6C7",
        fontSize: 28,
        fontWeight: "600"
    }
})