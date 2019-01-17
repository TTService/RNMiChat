/**
 * @Author: SinPingWu
 *
 * @Date: 2018-11-27 14:23
 *
 * @Email: SinPingWu@163.com
 *
 * @Brief: 活动页面
 *
 * @Problem:
 * 1、react-native-swiper 在加载动态数据的时候存在不能正常滑动的现象
 * 2、Carousel 在Android平台自由轮回播放时，会存在回滚到第一张的不良体验
 *
 * @Knowledge:
 * 1、采用如下方式 实现AntMobileRN的按需加载，有利于页面反应速度优化
 * import Carousel from "antd-mobile-rn/lib/carousel"
 */

import React, { Component } from 'react';
import { Alert, Image, View, ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';

import Carousel from "antd-mobile-rn/lib/carousel";

import PropTypes from 'prop-types';

import Util from './utils';

export class BannerComponent extends Component {

    static propTypes = {
      bannerUrl: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            bannerList: [],
        }
    }

    componentDidMount() {
        this.listBanner();
    }

    /**
     * 获取Banner信息
     * @returns {Promise<void>}
     */
    async listBanner() {
        let banner = await fetch(this.props.bannerUrl, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({})
            })
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson != null && responseJson.code === 200) {
                    return responseJson;
                } else {
                    console.error("Banner 信息获取失败");
                }
            })
            .catch(error => {
                console.error(error.toString());
            });

        if (banner != null && banner.code === 200) {
            this.setState({
                bannerList: banner.data
            })
        }
    }

    render() {

        let banner = this.state.bannerList.map((elem) => {
           return (
               <TouchableHighlight underlayColor={"transparent"} key={elem.id} onPress={() => {
                   Alert.alert(elem.img)}}>
                   <View style={styles.slide}>
                       <Image style={styles.image} source={{uri: elem.img}}/>
                   </View>
               </TouchableHighlight>
           )
        });

        return(
            <View style={{width: Util.size.width, height: 210}}>
                <Carousel autoplay={true} infinite={true} selectedIndex={0} >
                    {banner}
                </Carousel>
            </View>
        )
    }
}


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return(
            <View style={{width: Util.size.width, height: Util.size.height}}>
                <BannerComponent bannerUrl={"http://www.michat.ttsource.cn/banner/1"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slide: {
        width: Util.size.width,
        height: 150,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: Util.size.width,
        flexGrow: 1,
        alignSelf: 'stretch'
    },
});
