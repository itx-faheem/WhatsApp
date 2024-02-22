import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import React from 'react';
import {MyStatus, ResentStatus, ViewStatus} from '../components/Status';
import {COLORS} from '../theme';

const StatusListScreen = ({ResentStatusPress}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <>
        <MyStatus />
        <ResentStatus onPress={ResentStatusPress} />
        <ViewStatus />
      </>
    </ScrollView>
  );
};

export default StatusListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 10,
  },
});
