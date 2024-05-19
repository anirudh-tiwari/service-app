import { View, Text, StyleSheet } from 'react-native'
import Footer from './footer'
import Header from './header'
import Helpline from './helpline'
import { useState } from 'react'
import { heading } from './utils'
import SafetyCheck from './safety-check'

const Security = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.Wrapper}>
      <Header list={heading[selectedTab]} />
      { selectedTab === 1 && <SafetyCheck /> }
      { selectedTab === 4 && <Helpline /> }
      <Footer selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </View>
  )
}

export default Security

const styles = StyleSheet.create({
    Wrapper: {
        backgroundColor: "black",
        flex: 1,
        justifyConttent: "center",
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