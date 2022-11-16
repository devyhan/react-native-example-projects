import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

function PropsRootComponent(props) {
    return (
      <View style={styles.container}>
        <Text>PropsRootComponent</Text>
        <PropTopParentsComponent number={props.number} onIncrease={() => { props.onIncrease(); }}/>
        <PropsBottomParentsComponent number={props.number}/>
      </View>
    );
}

function PropTopParentsComponent(props) {
    return (
      <View style={styles.container}>
        <Text>PropTopParentsComponent</Text>
        <PropsTopChildrenComponent number={props.number} onIncrease={() => { props.onIncrease(); }} />
      </View>
    );
}

function PropsTopChildrenComponent(props) {
    return (
      <View style={styles.container}>
        <Text>PropsTopChildrenComponent</Text>
        <Button onPress={() => { props.onIncrease(); }} title={'Add to props number'} />
      </View>
    );
}

function PropsBottomParentsComponent(props) {
    console.log("PropsBottomParentsComponent update")
    return (
      <View style={styles.container}>
        <Text>PropsBottomParentsComponent</Text>
        <StateBottomChildrenComponent number={props.number}/>
      </View>
    );
}

function StateBottomChildrenComponent(props) {
    return (
      <View style={styles.container}>
        <Text>PropsBottomChildrenComponent</Text>
        <Text style={{fontSize: 20}}>number state: {props.number}</Text>
      </View>
    );
}

export default PropsRootComponent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'red',
      margin: 10
    },
  });