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
import { View, Text, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ActivityView from "./ActivityView";
import Personal from "./Personal";
import RechargeView from "./RechargeView";


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

const TabNavigation = createBottomTabNavigator(
    {
        Active: {
            screen: ActivityView,
            navigationOptions: {
                tabBarLabel: "广场",
            }
        },
        SecondPage: {
            screen: Tab2Component,
            navigationOptions: {
                tabBarLabel: "密聊",
            }
        },
        ThirdPage: {
            screen: Tab3Component,
            navigationOptions: {
                tabBarLabel: "关注"
            }
        },
        Personnel: {
            screen: Personal,
            navigationOptions: {
                tabBarLabel: "我"
            }
        }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Active') {
                    iconName = `ios-star${focused ? '' : '-outline'}`;
                } else if (routeName === 'SecondPage') {
                    iconName = `ios-chatbubbles${focused ? '' : ''}`;
                } else if (routeName === 'ThirdPage') {
                    iconName = `ios-water${focused ? '' : ''}`;
                } else if (routeName === 'Personnel') {
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

//设置TabBar的title，如果和NavBar混合使用，这个是必须的
TabNavigation.navigationOptions = ({ navigation }) => {
    let { routeName } = navigation.state.routes[navigation.state.index];

    let headerTitle = "";
    if (routeName === 'Active') {
        headerTitle = '广场';
    } else if (routeName === 'SecondPage') {
        headerTitle = '密聊';
    }  else if (routeName === 'ThirdPage') {
        headerTitle = '关注';
    }  else {
        headerTitle = '我';
    }
    return {
        headerTitle
    };
};

const HomeStack = createStackNavigator({
    Tab: {
        screen: TabNavigation,
    },
    Recharge: {
        screen: RechargeView,
        navigationOptions: {
            title: "Recharge"
        }
    },
});

const App = createAppContainer(HomeStack);

/*export default class extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return(
            <App/>
        );
    }
}*/
export default App
