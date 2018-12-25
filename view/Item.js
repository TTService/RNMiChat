/**
 * @Author: SinPingWu
 *
 * @Date: 2018-12-25 12:57
 *
 * @Email: SinPingWu@163.com
 *
 * @Brief:
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from "antd-mobile-rn/lib/icon";


export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return(
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Icon type="money-collect" />
                </View>
            </View>
        );
    }
}
