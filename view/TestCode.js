import React from 'react';
import { View, Text } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation';

const Placeholder = ({ text }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{text}</Text>
    </View>
);

class A extends React.Component {
    render() {
        return <Placeholder text="A!" />;
    }
}

class B extends React.Component {
    render() {
        return <Placeholder text="B!" />;
    }
}

let HomeStack = createStackNavigator({ A });
let SettingsStack = createStackNavigator({ B });

HomeStack.navigationOptions = {
    tabBarLabel: 'Home!',
};

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings!',
};

export default createAppContainer(createBottomTabNavigator({
    HomeStack,
    SettingsStack,
}));
