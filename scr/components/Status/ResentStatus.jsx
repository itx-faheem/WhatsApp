import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {COLORS, SIZES} from '../../theme';
import {ResentStatusData} from '../../data';

const ResentStatus = () => {
  const renderItem = ({item}) => (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.innerContainer} key={item.id}>
        <View style={styles.imgStory}>
          <Image source={item.storyImg} style={styles.statusStyle} />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={styles.userNameStyle}>{item.name}</Text>
          <Text style={styles.timeStyle}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recent Update</Text>
      <FlatList
        data={ResentStatusData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ResentStatus;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  text: {
    fontSize: SIZES.medium,
    color: COLORS.textGrey,
    marginBottom: 10,
  },
  statusStyle: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  imgStory: {
    width: 45,
    height: 45,
    borderColor: COLORS.teal,
    borderWidth: 2,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userNameStyle: {
    fontSize: SIZES.font,
    color: COLORS.white,
    fontWeight: '500',
  },
  timeStyle: {
    fontSize: SIZES.small,
    color: COLORS.textGrey,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
  },
});
