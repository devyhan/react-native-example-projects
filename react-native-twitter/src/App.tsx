import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Tweet from './containers/Tweet';
import home, { RootState, like } from './modules/home';

export default function App() {
  return (
    <Provider store={home}> 
      <Root />
    </Provider>
  );
}

function Root() {
  const dispatch = useDispatch();
  const likeCount = useSelector((state: RootState) => state.home.isLike)

  return (
      <View style={ styles.container }>
        <Text>{`${likeCount}`}</Text>
        <Button onPress={ () => dispatch(like()) } title={ 'Button' } />
        <Tweet />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});