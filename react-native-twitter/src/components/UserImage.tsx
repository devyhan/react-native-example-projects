import React from "react";
import { Image, Text } from 'react-native';

type UserImageProps = {
    uri: string
}

export default function UserImage({uri}: UserImageProps)  {
    const imageUri = {uri: uri}
    return <Image source={{uri: uri}} style={{resizeMode: 'contain', width: 100, height: 100}} />
}