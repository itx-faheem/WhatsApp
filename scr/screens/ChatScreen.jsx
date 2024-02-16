import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ChatBody, ChatFooter, ChatHeader} from '../components';
import {images} from '../theme';

const ChatScreen = () => {
  return (
    <>
      <ChatHeader />
      <ImageBackground
        style={{flex: 1, paddingVertical: 10, paddingHorizontal: 14}}
        source={images.wallpaper}>
        <ChatBody />
      </ImageBackground>
      <ChatFooter />
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
