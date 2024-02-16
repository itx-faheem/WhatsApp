import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, images } from '../theme';
import Camera from "react-native-vector-icons/Feather";
import Search from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={images.whatsapp} />
      <View style={styles.innerContainer}>
        <Camera size={20} name="camera" color={COLORS.secondaryColor} />
        <Search size={20} name="search" color={COLORS.secondaryColor} />
        <Entypo size={18} name="dots-three-vertical" color={COLORS.secondaryColor} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logoStyle: {
    height: 25,
    width: 120,
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: COLORS.primary,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 23
  },
  textStyle: {
    color: COLORS.white,
  },

});
