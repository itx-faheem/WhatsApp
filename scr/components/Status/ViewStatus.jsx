import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {COLORS, SIZES} from '../../theme';
import {ViewedStatusData} from '../../data';

const ViewStatus = () => {
  const renderItem = ({item}) => {
    return (
      <View style={{paddingVertical: 8}}>
        <View key={item.id} style={styles.innerContianer}>
          <View style={styles.imgStory}>
            <Image source={item.storyImg} style={styles.statusStyle} />
          </View>
          <View style={{marginTop: 4}}>
            <Text style={styles.userNameStyle}>{item.name}</Text>
            <Text style={styles.timeStyle}>{item.time}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ViewStatus</Text>
      <FlatList
        data={ViewedStatusData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ViewStatus;

const styles = StyleSheet.create({
  userNameStyle: {
    fontSize: SIZES.font,
    color: COLORS.white,
    fontWeight: '500',
  },
  timeStyle: {
    fontSize: SIZES.small,
    color: COLORS.textGrey,
  },
  statusStyle: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  text: {
    fontSize: SIZES.medium,
    color: COLORS.textGrey,
  },
  innerContianer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  imgStory: {
    width: 45,
    height: 45,
    borderColor: COLORS.textGrey,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingVertical: 14,
    gap: 10,
  },
});
