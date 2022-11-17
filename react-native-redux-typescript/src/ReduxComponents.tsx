import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../App';
import CounterContainer from './containers/CounterContainer';

function ReduxRootComponent(): React.ReactElement {
  return (
    <View style={styles.container}>
      <Text>ReduxRootComponent</Text>
      <ReduxTopParentsComponent />
      <ReduxBottomParentsComponent />
    </View>
  );
}

function ReduxTopParentsComponent() {
  return (
    <View style={styles.container}>
      <Text>ReduxTopParentsComponent</Text>
      <ReduxTopChildrenComponent />
    </View>
  );
}

function ReduxTopChildrenComponent() {
  return (
    <View style={styles.container}>
      <Text>ReduxTopChildrenComponent</Text>
      <CounterContainer />
    </View>
  );
}

function ReduxBottomParentsComponent() {
  console.log("ReduxBottomParentsComponent update");
  return (
    <View style={styles.container}>
      <Text>ReduxRightParentsComponent</Text>
      <ReduxBottomChildrenComponent />
    </View>
  );
}

function ReduxBottomChildrenComponent() {
  const count = useSelector((state: RootState) => state.counter.count);
  return (
    <View style={styles.container}>
      <Text>ReduxBottomChildrenComponent</Text>
      <Text style={{fontSize: 20}}>number state: {count}</Text>
    </View>
  );
}

export default ReduxRootComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
    margin: 10,
  },
});
