import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../theme'
import LeftArrow from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Call from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const ChatHeader = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.contianer}>
            <View style={styles.headerContainer} >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }} >
                    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.5} >
                        <LeftArrow name="arrowleft" color={COLORS.white} size={22} />
                    </TouchableOpacity>
                    <Image style={styles.imgStyle} source={images.user1} />
                </View>
                <Text style={styles.title} >Kaju</Text>
            </View>
            <View style={styles.iconContainer} >
                <FontAwesome size={20} color={COLORS.white} name="video-camera" />
                <Call size={20} color={COLORS.white} name="call" />
                <Entypo size={20} color={COLORS.white} name="dots-three-vertical" />
            </View>
        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    contianer: {
        backgroundColor: COLORS.background,
        paddingVertical: 12,
        paddingHorizontal: 14,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    imgStyle: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.font,
        fontWeight: "400"
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    }
})