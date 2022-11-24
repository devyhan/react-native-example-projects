import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";

import { RootState } from "../modules/home";
import UserImage from "../components/UserImage";

export default function Tweet() {
    const uri = useSelector((state: RootState) => state.home.userProfileImage)

    return (
        <View style={styles.image}>
            <UserImage uri={uri} size={55}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 1
    }
})