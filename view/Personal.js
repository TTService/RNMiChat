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


import {Icon, ListItem} from 'react-native-elements';

import Util from './utils';
import { Crown } from './../util/svgIcon';


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
            <ScrollView style={{backgroundColor: "#f4f4f4"}}>
                <PersonalInfo/>

                <View>
                    <ListItem
                        containerStyle={{backgroundColor: "#fefefe", marginTop: 8}}
                        leftIcon={<Icon name='money' type='font-awesome' color='#A9A9A9' size={30}/>}
                        title={"充值服务"}
                        titleStyle={styles.itemTitle}
                        subtitle={"让密聊不再等待"}
                        subtitleStyle={styles.itemSubTitle}
                        rightTitle={"300.00密币"}
                        rightTitleStyle={styles.itemRightTitle}
                        rightIcon={<Icon name='ios-arrow-forward' type='ionicon' color='#778899' size={25}/>}/>

                    <ListItem
                        containerStyle={{backgroundColor: "#fefefe", marginTop: 10}}
                        leftIcon={<Crown width={20}/>}
                        title={"会员服务"}
                        titleStyle={styles.itemTitle}
                        subtitle={"多项特权，开通或续费"}
                        subtitleStyle={styles.itemSubTitle}
                        rightIcon={<Icon name='ios-arrow-forward' type='ionicon' color='#778899' size={25}/>}/>

                    <ListItem
                        containerStyle={{backgroundColor: "#fefefe", marginTop: 10}}
                        leftIcon={<Icon name={"ios-gift"} type={"ionicon"} color={Util.color.royalblue} size={25}/>}
                        title={"礼物收益"}
                        titleStyle={styles.itemTitle}
                        subtitle={"将收到的礼物兑换成收益币"}
                        subtitleStyle={styles.itemSubTitle}
                        rightIcon={<Icon name='ios-arrow-forward' type='ionicon' color='#778899' size={25}/>}/>

                    <ListItem
                        containerStyle={{backgroundColor: "#fefefe", marginTop: 10}}
                        leftIcon={<Icon name='ios-wallet' type='ionicon' color={Util.color.lawngreen} size={25}/>}
                        title={"收益提现"}
                        titleStyle={styles.itemTitle}
                        subtitle={"可以将收益币进行提现"}
                        subtitleStyle={styles.itemSubTitle}
                        rightIcon={<Icon name='ios-arrow-forward' type='ionicon' color='#778899' size={25}/>}/>
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-around", backgroundColor: "#fefefe", marginTop: 12, paddingTop: 13, paddingBottom: 13}}>
                    <View style={{alignItems: "center"}}>
                        <Icon name={"ios-gift"} type={"ionicon"} color={Util.color.royalblue}/>
                        <Text style={{color: Util.color.lightslategrey, fontSize: Util.dimension.content_text_size_14}}>活动列表</Text>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Icon name={"directions"} type={"simple-line-icon"} color={Util.color.lawngreen}/>
                        <Text style={{color: Util.color.lightslategrey, fontSize: Util.dimension.content_text_size_14}}>新手指南</Text>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Icon name={"feed"} type={"font-awesome"} color={Util.color.fuchsia}/>
                        <Text style={{color: Util.color.lightslategrey, fontSize: Util.dimension.content_text_size_14}}>意见反馈</Text>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Icon name={"ios-settings"} type={"ionicon"} color={Util.color.limegreen}/>
                        <Text style={{color: Util.color.lightslategrey, fontSize: Util.dimension.content_text_size_14}}>应用设置</Text>
                    </View>
                </View>


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
    },
    itemTitle: {
        color: Util.color.lightslategrey,
        fontSize: Util.dimension.content_text_size_14
    },
    itemSubTitle: {
        color: Util.color.lightslategrey,
        fontSize: Util.dimension.content_text_size_10
    },
    itemRightTitle: {
        color: Util.color.lightslategrey,
        fontSize: Util.dimension.content_text_size_9
    }
});

