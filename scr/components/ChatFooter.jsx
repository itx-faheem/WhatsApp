import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../theme';
import EmjoyIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Microphone from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatFooter = () => {
  const [message, setMessage] = useState('');
  const [sendEnable, setSendEnable] = useState(false);

  const onChange = value => {
    setMessage(value);
    setSendEnable(value.length > 0);
  };

  const OnSend = () => {
    setMessage('');
    setSendEnable(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
          <EmjoyIcon name="emoji-emotions" size={20} color={COLORS.white} />
          <TextInput
            placeholder="Message"
            multiline
            style={{...styles.textInput, width: sendEnable ? '85%' : '60%'}}
            value={message}
            onChangeText={value => onChange(value)}
            placeholderTextColor={COLORS.textGrey}
          />
        </View>
        <View style={styles.innerContainer}>
          <Entypo name="attachment" size={20} color={COLORS.white} />
          {!sendEnable && (
            <>
              <FontAwesome name="rupee" size={20} color={COLORS.white} />
              <Entypo name="camera" size={20} color={COLORS.white} />
            </>
          )}
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={OnSend} style={styles.microphoneContainer}>
          {sendEnable ? (
            <Microphone name="send" size={20} color={COLORS.white} />
          ) : (
            <Microphone name="microphone" size={20} color={COLORS.white} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: '85%',
    paddingHorizontal: 14,
    borderRadius: 30,
    justifyContent: 'space-between',
  },
  textInput: {
    paddingHorizontal: 14,
    color: COLORS.white,
    fontSize: SIZES.font,
    // backgroundColor: 'blue',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  microphoneContainer: {
    backgroundColor: COLORS.teal,
    padding: 12,
    borderRadius: 50,
  },
});

//  {/* <Microphone name="microphone" size={20} color={COLORS.white} /> */}
{
  /* <Microphone name="send" size={20} color={COLORS.white} /> */
}

{
}
