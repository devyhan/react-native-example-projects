import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import UserImage from '../components/UserImage';
import Icon from '../components/Icon';

export default function Header() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <UserImage uri='https://picsum.photos/id/30/200/' size={32}/>
                <Icon source={require('../../res/logo.svg')} width={27} height={22} />
                <Icon source={require('../../res/feature.svg')} width={23} height={22} />
            </View>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#fff'
    },
    container: {
        height: 44,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#BDC5CD',
        backgroundColor: '#fff'
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});