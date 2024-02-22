import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES, images} from '../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Call from 'react-native-vector-icons/Ionicons';
import {ResendCallData} from '../../data';

const ResendCall = () => {
  return (
    <>
      <Text style={styles.ResendCall}>ResendCall</Text>
      {ResendCallData.map(item => (
        <View style={styles.container} key={item.id}>
          <View style={styles.inncontianer}>
            <Image source={item.profileImg} style={styles.imgstyle} />
            <View style={{marginLeft: 4}}>
              <Text style={styles.headerCall}>{item.name}</Text>
              <View style={styles.customStyle}>
                {item.incoming && (
                  <FeatherIcon
                    name="arrow-down-left"
                    size={20}
                    color={COLORS.red}
                  />
                )}
                {item.outgoing && (
                  <FeatherIcon
                    name="arrow-up-right"
                    size={20}
                    color={COLORS.teal}
                  />
                )}
                <Text style={styles.footerText}>{item.time}</Text>
              </View>
            </View>
          </View>
          {item.video && (
            <FontAwesome
              size={20}
              color={COLORS.tertiary}
              name="video-camera"
            />
          )}
          {item.audio && <Call size={20} color={COLORS.tertiary} name="call" />}
        </View>
      ))}
    </>
  );
};

export default ResendCall;

const styles = StyleSheet.create({
  ResendCall: {
    fontSize: SIZES.medium,
    color: COLORS.textGrey,
    marginVertical: 20,
  },
  imgstyle: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  headerCall: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: SIZES.font,
  },
  footerText: {
    color: COLORS.textGrey,
  },
  inncontianer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  customStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
});
