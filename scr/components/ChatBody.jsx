import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {COLORS, SIZES} from '../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import {MessageData} from '../data/MessageData';

const ChatBody = () => {
  const ScrollViewRef = useRef();
  const UserMessageView = ({message, time}) => {
    return (
      <View style={styles.UserMessageContainer}>
        <View style={styles.chatContainre}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
          <FontAwesome name="check-double" size={10} color={COLORS.blue} />
        </View>
      </View>
    );
  };

  const OtherUeserMessageView = ({message, time}) => {
    return (
      <View style={styles.otherMessage}>
        <View style={styles.innerOtherContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  };
  const ScrollViewToBottom = () => {
    ScrollViewRef.current.scrollToEnd({animated: true});
  };

  return (
    <>
      <ScrollView
        ref={ScrollViewRef}
        onContentSizeChange={ScrollViewToBottom}
        showsVerticalScrollIndicator={false}>
        <View style={{gap: 10}}>
          {MessageData.map(item => {
            return (
              <>
                {item.id === 1 ? (
                  <UserMessageView message={item.message} time={item.time} />
                ) : (
                  <OtherUeserMessageView
                    message={item.message}
                    time={item.time}
                  />
                )}
              </>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.iconConTianer}>
        <TouchableOpacity
          onPress={ScrollViewToBottom}
          activeOpacity={0.5}
          style={styles.dowArrowStyle}>
          <FontAwesome name="angles-down" color={COLORS.white} size={14} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ChatBody;

const styles = StyleSheet.create({
  UserMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  otherMessage: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  chatContainre: {
    flexDirection: 'row',
    backgroundColor: COLORS.teal,
    maxWidth: '80%',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    gap: 6,
    alignItems: 'flex-end',
  },
  message: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontWeight: '400',
  },
  time: {
    fontSize: SIZES.xSmall,
    color: COLORS.white,
  },
  innerOtherContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    alignItems: 'flex-end',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  dowArrowStyle: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconConTianer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

{
  /* {MessageData.map(item => {
        <>
          <UserMessageView message={item.message} time={item.time} />
          <OtherUeserMessageView message={item.message} time={item.time} />
        </>;
      })} */
}
