import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../theme';
import Arowleft from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const ContactHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Arowleft name="arrowleft" color={COLORS.white} size={20} />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerText}>Select Contact</Text>
          <Text style={styles.contactText}>23 Contact</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Arowleft name="search1" color={COLORS.white} size={20} />
        <Entypo name="dots-three-vertical" color={COLORS.white} size={20} />
      </View>
    </View>
  );
};

export default ContactHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: SIZES.font,
    color: COLORS.white,
    fontWeight: '500',
  },
  contactText: {
    fontSize: SIZES.medium,
    color: COLORS.textGrey,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
