import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, images} from '../theme';
import LeftArrow from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ProgressBar from './ProgressBar';
const FulModal = props => {
  const {showModal, setshowModal, item, setTimeUp} = props;
  const updateModalStatus = () => {
    setshowModal(prev => ({...prev, [item.id]: false}));
  };

  return (
    <Modal
      animabbtionType="fade"
      visible={showModal}
      onRequestClose={updateModalStatus}>
      <View style={styles.container}>
        <View>
          <ProgressBar setTimeUp={setTimeUp} />
        </View>
        <View style={styles.TopContainer}>
          <View style={styles.topInnerContainer}>
            <TouchableOpacity
              onPress={() =>
                setshowModal(prev => ({...prev, [item.id]: false}))
              }>
              <LeftArrow name="arrowleft" color={COLORS.white} size={20} />
            </TouchableOpacity>
            <Image style={styles.userImgStyle} source={images.user1} />
            <Text style={styles.topNameStyle}>Sameer Kashyap </Text>
          </View>
          <Entypo name="dots-three-vertical" size={20} color={COLORS.white} />
        </View>
        <>
          <Image source={images.status1} style={styles.imgStyle} />
          <Text style={styles.messageText}>My Latest Art</Text>
        </>
        <View style={styles.replySection}>
          <TouchableOpacity
            onPress={() => setshowModal(prev => ({...prev, [item.id]: false}))}>
            <LeftArrow name="up" size={20} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.replyText}>Reply</Text>
        </View>
      </View>
    </Modal>
  );
};

export default FulModal;

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
  },
  messageText: {
    fontSize: SIZES.font,
    color: COLORS.white,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
  },
  userImgStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  container: {
    justifyContent: 'space-between',
    backgroundColor: COLORS.background,
    height: '100%',
  },
  replySection: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },

  topNameStyle: {
    color: COLORS.white,
    fontSize: SIZES.font,
    fontWeight: '500',
  },
  topInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  TopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  replyText: {
    fontSize: SIZES.font,
    color: COLORS.white,
    fontWeight: '400',
    textAlign: 'center',
  },
});
