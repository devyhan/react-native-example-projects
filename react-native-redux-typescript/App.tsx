import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import PropsRootComponent from './components/PropsRootComponent';
import ReduxRootComponent from './components/ReduxComponents';

function reducer(currentState, action) {
    if (currentState === undefined) {
        return {
            number: 1,
        };
    }
    const newState = { ...currentState };
    if (action.type === 'PLUS') newState.number++;
    return newState;
}

const store = createStore(reducer);

export default function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>RootComponent</Text>
      <PropsRootComponent number={counter} onIncrease={increment} />
      <Provider store={store}>
        <ReduxRootComponent />
      </Provider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'red',
    margin: 10
  },
});
