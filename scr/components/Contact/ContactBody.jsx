import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, Images, SIZES, images} from '../../theme';
import ContactListData from '../../data/ContactListData';

const ContactBody = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>Contact on Whatsapp</Text>
        {ContactListData.map(item => {
          return (
            <View key={item.id} style={styles.innerContainer}>
              <Image style={styles.imgStyle} source={item.profile} />
              <Text style={styles.nameStyle}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

export default ContactBody;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    gap: 10,
  },
  nameStyle: {
    fontSize: SIZES.font,
    color: COLORS.textColor,
    fontWeight: '400',
  },
  imgStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  headerText: {
    color: COLORS.textGrey,
    fontSize: SIZES.font,
  },
});
