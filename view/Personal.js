/**
 * @Author: SinPingWu
 *
 * @Date: 2018-12-19 17:44
 *
 * @Email: SinPingWu@163.com
 *
 * @Brief:
 */
import React, { Component } from 'react';
import {AsyncStorage, Image, View, Platform, ScrollView, Text, StyleSheet } from 'react-native';

import Util from './utils';


export class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarUrl: "http://qiniu.ttsource.cn/beautiful_small_gril_1.jpg",
            username: 'Test',
            memberLevel: "黄金会员",
            selfDesc: "You 懂我的欢喜",
            expiryDate: "2019-01-13",
            age: 28,
            constellation: "天蝎座",
            career: "程序员",
            userInfo: null,
        }
    };

    componentWillMount() {
        AsyncStorage.getItem("nickname", (error, result) => {
            if (error == null) {
                this.setState({
                    username: result,
                })

            }
        });

        AsyncStorage.getItem("avatar", (error, result) => {
            if (error == null) {
                this.setState({
                    avatar: result,
                })

            }
        });

        AsyncStorage.getItem("description", (error, result) => {
            if (error == null) {
                this.setState({
                    selfDesc: result,
                })

            }
        });

        AsyncStorage.getItem("age", (error, result) => {
            if (error == null) {
                this.setState({
                    age: result,
                })

            }
        });

        AsyncStorage.getItem("constellation", (error, result) => {
            if (error == null) {
                this.setState({
                    constellation: result,
                })

            }
        });

        AsyncStorage.getItem("career", (error, result) => {
            if (error == null) {
                this.setState({
                    career: result,
                })

            }
        });
    }

    render() {
        return(
            <View style={styles.headerContainer}>
                <View style={{alignItems: "flex-end", paddingRight: 20}}>
                    <Text style={styles.signTxv}>签到</Text>
                </View>
                <View style={styles.userDescContainer}>
                    <Image style={styles.avatar} source={{uri: this.state.avatarUrl}}/>
                    <View style={{paddingLeft: 10}}>
                        <Text style={styles.username}>{this.state.username}<Text> </Text><Text style={styles.memberLevel}>{this.state.memberLevel}</Text></Text>
                        <Text style={{fontSize: Util.dimension.content_text_size_9, color: '#fff'}}>{this.state.selfDesc}</Text>
                    </View>
                </View>
                <View style={styles.userInfoContainer}>
                    <View style={{alignItems: "flex-end", paddingRight: 20}}>
                        <Text style={{color: "#fff", fontSize: Util.dimension.content_text_size_10}}>会员到期日:<Text>{this.state.expiryDate}</Text></Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "center", paddingTop: 5}}>
                        <View style={{alignItems: "center"}}>
                            <Text style={styles.userInfoValue}>{this.state.age}</Text>
                            <Text style={styles.userInfoText}>年龄</Text>
                        </View>
                        <View style={{alignItems: "center"}}>
                            <Text style={styles.userInfoValue}>{this.state.constellation}</Text>
                            <Text style={styles.userInfoText}>星座</Text>
                        </View>
                        <View style={{alignItems: "center"}}>
                            <Text style={styles.userInfoValue}>{this.state.career}</Text>
                            <Text style={styles.userInfoText}>职业</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return(
            <ScrollView>
                <PersonalInfo/>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "column",
        justifyContent: "space-around",
        width: Util.size.width,
        height: 160,
        paddingTop: Platform.OS === 'ios' ? 35 : 0,
        backgroundColor: Util.color.cornflowerblue,
    },
    signTxv: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 12
    },
    userDescContainer: {
        flexDirection: "row",
        marginLeft: 20,
        alignItems: "center"
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    username: {
        color: Util.color.white,
        fontSize: Util.dimension.content_text_size_18,
        fontWeight: '500'
    },
    memberLevel: {
        color: Util.color.gold,
        fontSize: Util.dimension.content_text_size_10,
    },
    userInfoContainer: {

    },
    userInfoText: {
        fontSize: Util.dimension.content_text_size_10,
        color: Util.color.white,
        marginTop: 1,

    },
    userInfoValue: {
        fontSize: Util.dimension.content_text_size_12,
        color: Util.color.white,
        marginBottom: 1
    }
});

