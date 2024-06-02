import React, { useState, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Keyboard, Dimensions } from 'react-native';
import Footer from './footer';
import Header from './header';
import Helpline from './helpline';
import { heading } from './utils';
import SafetyCheck from './safety-check';
import Create from './create';
import Track from './track';

const Security = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        <Header list={heading[selectedTab]} />
        {selectedTab === 0 && <Track />}
        {selectedTab === 1 && <SafetyCheck />}
        {selectedTab === 3 && <Create />}
        {selectedTab === 4 && <Helpline />}
      </View>
      {!keyboardVisible && (
        <Footer style={styles.footer} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      )}
    </KeyboardAvoidingView>
  );
};

export default Security;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
