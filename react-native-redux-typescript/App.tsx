import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import counter from './src/modules/counter';
import PropsRootComponent from './src/PropsRootComponent';
import ReduxRootComponent from './src/ReduxComponents';

const rootReducer = combineReducers({ counter });
const store = createStore(rootReducer);

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

export type RootState = ReturnType<typeof rootReducer>;