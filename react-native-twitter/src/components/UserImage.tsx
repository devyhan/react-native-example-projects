import React from "react";
import { Image, StyleSheet, Text } from 'react-native';

type UserImageProps = {
    uri: string,
    size: number
}

export default function UserImage({uri, size}: UserImageProps)  {
    const imageUri = {uri: uri}
    return <Image source={{uri: uri}} style={styles(size).image} />
}

const styles = (size: number) => StyleSheet.create({
    image: {
        resizeMode: 'contain', 
        width: size, 
        height: size,
        borderRadius: size / 2
    }
});