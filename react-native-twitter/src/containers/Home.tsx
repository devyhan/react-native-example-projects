import * as React from 'react';
import { Dimensions, Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

const windowWidth = Dimensions.get('window').width

type RootStackParamList = {
    Home: undefined;
    Home1: undefined;
    Home2: undefined;
    Home3: undefined;
}

export default function HomeCoordinator() {
    const Stack = createStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ gestureEnabled: true, headerShown: false, gestureDirection: 'horizontal',  gestureResponseDistance: windowWidth }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Home1' component={Home1} />
            <Stack.Screen name='Home2' component={Home2} />
            <Stack.Screen name='Home3' component={Home3} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    container1: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'cyan'
    },
    container2: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    container3: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'orange'
    }
});


type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
function Home({ navigation }: HomeScreenProps) {
    return (
      <View style={styles.container}>
        <Text>Home!</Text>
        <Button
          title='Go to Home1'
          onPress={() => navigation.navigate('Home1')}
        />
      </View>
    );
}

type Home1ScreenProps = NativeStackScreenProps<RootStackParamList, 'Home1'>;
function Home1({ navigation }: Home1ScreenProps) {
    return (
      <View style={styles.container1}>
        <Text>Home1!</Text>
        <Button
          title='Go to Home2'
          onPress={() => navigation.navigate('Home2')}
        />
      </View>
    );
}

type Home2ScreenProps = NativeStackScreenProps<RootStackParamList, 'Home2'>;
function Home2({ navigation }: Home2ScreenProps) {
    return (
      <View style={styles.container2}>
        <Text>Home2!</Text>
        <Button
          title='Go to Home3'
          onPress={() => navigation.navigate('Home3')}
        />
      </View>
    );
}

type Home3ScreenProps = NativeStackScreenProps<RootStackParamList, 'Home3'>;
function Home3({ navigation }: Home3ScreenProps) {
    return (
      <View style={styles.container3}>
        <Text>Home3!</Text>
        <Button title='pop to top' onPress={() => navigation.popToTop()} />
      </View>
    );
}