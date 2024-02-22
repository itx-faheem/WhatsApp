import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {ContactBody, ContactHeader} from '../components/Contact';

const ContactScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContactHeader />
        <ContactBody />
      </ScrollView>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({});
