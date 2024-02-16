import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { MyStatus, ResentStatus, ViewStatus } from '../components/Status'
import { COLORS } from '../theme'

const StatusListScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container} >
      <MyStatus />
      <ResentStatus />
      <ViewStatus />
    </ScrollView>
  )
}

export default StatusListScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 10
  }
})