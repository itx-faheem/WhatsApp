import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {COLORS, SIZES} from '../../theme';

const CallLink = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Icon name="link2" size={20} color={COLORS.white} />
        </TouchableOpacity>
        <View style={{gap: 4}}>
          <Text style={styles.headerCall}>Create call Link</Text>
          <Text style={styles.footerText}>
            Share a link for your WhatsApp call
          </Text>
        </View>
      </View>
    </>
  );
};

export default CallLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
  headerCall: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: SIZES.font,
  },
  iconWrapper: {
    backgroundColor: COLORS.tertiary,
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: COLORS.textGrey,
  },
});
