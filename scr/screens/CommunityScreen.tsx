import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../theme'

const CummunityScreen = () => {
  return (
    <View style={styles.container} >
      <Image source={images.communityImg} style={styles.communityImgStyle} />
      <View style={styles.textWrapper} >
        <Text style={styles.headerText} >Introducing communitites</Text>
        <Text style={styles.desriptionText} >Easy organize your related
          groups and send accouncements.
          Now your communitites,
          like neighbourhood or School, can have their own Space.</Text>
      </View>
      <TouchableOpacity activeOpacity={0.5} style={styles.buttonStyle} >
        <Text style={styles.buttonTittle} >Start Your community</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CummunityScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background
  },
  communityImgStyle: {
    width: "60%",
    resizeMode: "contain",
    height: "25%"
  },
  headerText: {
    fontSize: SIZES.xxLarge,
    color: COLORS.white
  },
  textWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "72%",
    gap: 5
  },
  desriptionText: {
    color: COLORS.textGrey,
    lineHeight: 20,
    textAlign: "center"
  },
  buttonStyle: {
    marginTop: 20,
    backgroundColor: COLORS.tertiary,
    padding: 8,
    borderRadius: 30,
    width: "80%"
  },
  buttonTittle: {
    textAlign: "center",
    color: COLORS.background,
    fontSize: SIZES.medium
  }
})