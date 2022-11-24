import React from 'react';
import { Dimensions, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './containers/Navigation';
import home from './modules/home';

export default function App() {
  return (
    // <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
      <Provider store={home}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
    // </View>
  );
}

// function Root() {
//   const dispatch = useDispatch();
//   const likeCount = useSelector((state: RootState) => state.home.isLike)

//   return (
//       <View style={ styles.container }>
//         <Text>{`${likeCount}`}</Text>
//         <Button onPress={ () => dispatch(like()) } title={ 'Button' } />
//         <Tweet />
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });