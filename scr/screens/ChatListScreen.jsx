import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ChatList} from '../components';
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../theme';
import {useNavigation} from '@react-navigation/native';

const ChatListScreen = () => {
  const navigation = useNavigation();
  const OnNavigate = () => {
    navigation.navigate('ContactScreen');
  };
  return (
    <View style={styles.constiner}>
      <ChatList />
      <TouchableOpacity
        onPress={OnNavigate}
        style={styles.iconCOntainer}
        activeOpacity={0.5}>
        <MessageIcon size={22} color={COLORS.white} name="message-text" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  iconCOntainer: {
    backgroundColor: COLORS.tertiary,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  constiner: {
    position: 'relative',
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
