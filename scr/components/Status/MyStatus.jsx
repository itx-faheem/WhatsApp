import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES, images} from '../../theme';
import Icon from 'react-native-vector-icons/AntDesign';
const MyStatus = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={images.user1} style={styles.imgStyle} />
        <View style={styles.IconContainer}>
          <Icon name="plus" size={12} color={COLORS.white} />
        </View>
      </View>
      <View>
        <Text style={styles.Status}>My Status</Text>
        <Text style={styles.textStyle}>Tap to add Status update</Text>
      </View>
    </View>
  );
};

export default MyStatus;

const styles = StyleSheet.create({
  imgStyle: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  Status: {
    fontSize: SIZES.font,
    color: COLORS.white,
    fontWeight: '400',
  },
  textStyle: {
    fontSize: SIZES.medium,
    color: COLORS.textGrey,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  IconContainer: {
    backgroundColor: COLORS.tertiary,
    padding: 2,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
