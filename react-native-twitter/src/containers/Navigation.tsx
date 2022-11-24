import * as React from 'react';
import { Dimensions, TouchableOpacityBase, View } from 'react-native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import HomeCoordinator from './Home';
import Search from './Search';
import Notice from './Notice';
import Message from './Message';
import Header from './Header';
import Icon from '../components/Icon';

export default function Navigation() {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator screenOptions={screenOptions} >
        <Tab.Screen name='Home' component={HomeCoordinator} options={home} />
        <Tab.Screen name='Search' component={Search} options={search} />
        <Tab.Screen name='Notice' component={Notice} options={notice} />
        <Tab.Screen name='Message' component={Message} options={message} />
      </Tab.Navigator>
    );
}

const screenOptions: BottomTabNavigationOptions = {
    tabBarLabelStyle: {
        display: 'none'
    },
    tabBarActiveTintColor: '#4C9EEB',
}

const home: BottomTabNavigationOptions = {
    tabBarIcon: () => (
        <Icon source={require('../../res/home.svg')} width={22.5} height={20.2} />
    ),
    header: ({ navigation, route, options }) => {
        return <Header />
    },
}

const search: BottomTabNavigationOptions = {
    tabBarIcon: () => (
        <Icon source={require('../../res/search.svg')} width={19.75} height={19.75} />
    ),
    header: ({ navigation, route, options }) => {
        return <Header />
    },
}

const notice: BottomTabNavigationOptions = {
    tabBarIcon: () => (
        <Icon source={require('../../res/notice.svg')} width={19.25} height={19.25} />
    ),
    header: ({ navigation, route, options }) => {
        return <Header />
    },
}

const message: BottomTabNavigationOptions = {
    tabBarIcon: () => (
        <Icon source={require('../../res/message.svg')} width={20} height={18} />
    ),
    header: ({ navigation, route, options }) => {
        return <Header />
    },
}