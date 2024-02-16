import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {COLORS, SIZES, images} from '../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ChatListData} from '../data/ChatListData';
import {useNavigation} from '@react-navigation/native';
const ChatList = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('ChatScreen');
  };
  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={handlePress}
        key={item.id}
        style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={item.profile} style={styles.imgStyle} />
          <View style={styles.chatContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.messageText}>{item.message}</Text>
          </View>
        </View>
        <View style={styles.lastContainer}>
          <Text style={styles.timeText}>{item.time}</Text>
          {item.mute && (
            <Icon
              name="volume-variant-off"
              size={22}
              color={COLORS.textColor}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <FlatList data={ChatListData} renderItem={RenderItem} />
    </>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  imgStyle: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  nameText: {
    fontSize: SIZES.font,
    color: COLORS.textColor,
    fontWeight: '500',
  },
  messageText: {
    fontSize: SIZES.small,
    color: COLORS.textGrey,
  },
  timeText: {
    fontSize: SIZES.small,
    color: COLORS.textGrey,
  },
  chatContainer: {
    // flexDirection: 'row',
    gap: 5,
  },
  lastContainer: {
    alignItems: 'flex-end',
    gap: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
