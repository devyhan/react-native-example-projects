import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>ReduxTopChildrenComponent</Text>
      <Button
        onPress={() => dispatch({ type: "PLUS" })}
        title={"Add to state number"}
      />
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
  const number = useSelector((state) => state.number);
  return (
    <View style={styles.container}>
      <Text>ReduxBottomChildrenComponent</Text>
      <Text style={{ fontSize: 20 }}>number state: {number}</Text>
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
