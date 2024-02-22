import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { CallLink, ResendCall } from '../components/Call'
import { COLORS } from '../theme'

const CallListScreen = () => {
  return (
    <View style={styles.container} >
      <ScrollView
        showsVerticalScrollIndicator={false} >
        <CallLink />
        <ResendCall />
      </ScrollView>
    </View>
  )
}

export default CallListScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingVertical: 12,
    paddingHorizontal: 14,
    flex: 1
  }
})