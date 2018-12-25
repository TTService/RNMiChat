/**
 * @Author: SinPingWu
 *
 * @Date: 2018-11-27 13:07
 *
 * @Email: SinPingWu@163.com
 *
 * @Brief: 主页面
 *
 * 知识点：
 *
 * 1、BottomTabNavigator的使用
 *
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ActivityView from "./ActivityView";
import Personal from "./Personal";


class Tab2Component extends Component {
    render() {
        return(
            <View style={{width: 200, height: 100, backgroundColor: "#1FA"}}>

            </View>
        );
    }
}

class Tab3Component extends Component {
    render() {
        return(
            <View style={{width: 200, height: 100, backgroundColor: "#FAE"}}>

            </View>
        );
    }
}

const BottomRoute = createBottomTabNavigator(
    {
        "广场": ActivityView,
        "密聊": Tab2Component,
        "关注": Tab3Component,
        "我": Personal,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === '广场') {
                    iconName = `ios-star${focused ? '' : '-outline'}`;
                } else if (routeName === '密聊') {
                    iconName = `ios-chatbubbles${focused ? '' : ''}`;
                } else if (routeName === '关注') {
                    iconName = `ios-water${focused ? '' : ''}`;
                } else if (routeName === '我') {
                    iconName = `ios-person${focused ? '' : ''}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

const App = createAppContainer(BottomRoute);

export default class extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return(
            <App/>
        );
    }
}
