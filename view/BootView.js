/**
 * 知识点：
 * 1、TextInput的使用
 * 2、根据平台获取组件
 * 3、PropTypes
 */
import React, { Component } from 'react';
import { Alert, Image, Modal, View, Platform, Text, TextInput, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
// 在React v15.5后，React.PropTypes被抛弃，采用 yarn add prop-types导入，在import
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';

import Util from './utils';

/**
 * 根据平台，选择不同的登录按钮样式
 */
class PlatformBtn extends Component {

    static propTypes = {
        onPress: PropTypes.func.isRequired,
        btnStyle: PropTypes.object,
        btnText: PropTypes.string,
    };

    static defaultValue = {
        btnText: "",
    };

    constructor(props) {
      super(props);
    }

    render() {
        if (Platform.OS === 'ios') {
            return(
                <TouchableHighlight onPress={() => this.props.onPress} style={this.props.btnStyle}>
                    <Text style={{fontSize: 16, color: "#fff"}}>{this.props.btnText}</Text>
                </TouchableHighlight>
            )
        } else {
            return(
                <TouchableOpacity onPress={() => this.state.onPress} style={this.state.btnStyle}>
                    <Text style={{fontSize: 16, color: "#fff"}}>{this.props.btnText}</Text>
                </TouchableOpacity>
            )
        }
    }
}

export default class BootView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showClearUsernameBtn: false,
            showClearPasswordBtn: false,
            loginBtnColor: '#ccc',
        }
    };

    _clearUsername() {
        this.setState({
            username: '',
            showClearUsernameBtn: false,
            loginBtnColor: "#ccc",
        })
    }

    _clearPassword() {
        this.setState({
            password: '',
            showClearPasswordBtn: false,
            loginBtnColor: "#ccc",
        })
    }

    _changeLoginBtnColor() {
        let loginBtnColor = this.state.username.length > 0 && this.state.password.length > 0 ? "#529ED6" : "#ccc";
        this.setState({
            loginBtnColor: loginBtnColor
        })
    }

    /**
     * 查找密码
     */
    _forgetPassword() {

    }

    /**
     * 注册
     * @private
     */
    _register() {

    }

    /**
     * 登录
     * @private
     */
    async _login() {
        let loginResponse = await fetch("http://localhost:8082/login", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "identifier": this.state.username,
                    "credential": this.state.password
                })
            })
            .then(response => response.json())
            .then(responseJson => {
                return responseJson;
            })
            .catch(error => {
                console.error(error);
            });

        if (loginResponse.code === 200) {
            Alert.alert("登录成功");
        }
    }

    render() {
        return(
            <View style={{width: Util.size.width, height: Util.size.height, backgroundColor: "#fcfcfc", flexDirection: "column", alignItems: "center"}}>
                <Image style={[styles.logo, {marginTop: 80}]} source={{uri: "icon_logo"}}/>

                <View style={styles.inputContainer}>
                    <View style={styles.inputItem}>
                        <Icon name={"ios-person"} size={20} color={"#999"}/>
                        <TextInput
                            style={styles.textInput}
                            // 提示内容
                            placeholder={"用户名"}
                            // 提示内容颜色
                            placeholderTextColor={"#999"}
                            // 内容
                            value={this.state.username}
                            // 自动大写方式 none, sentences, words, characters
                            autoCapitalize={"none"}
                            // 自动纠错
                            autoCorrect={false}
                            // 自动获取焦点，在componentDidMount后，默认false
                            //autoFocus={false}
                            // 提交释放焦点，单行默认true, 多行默认false, 多行true时，按Enter释放焦点，触发onSubmitEditing而不换行
                            blurOnSubmit={true}
                            // 是否隐藏光标
                                   caretHidden={false}
                            // 设置显示的默认值
                                   defaultValue={""}
                            // 是否可编辑
                                   editable={true}
                            // 键盘类型
                                   keyboardType={"name-phone-pad"}
                            // 最大字节长度
                                   maxLength={15}
                            // 是否为多行，默认false
                                   multiline={false}
                            // 失去焦点时的回调
                                   //onBlur={() => {}}
                            // 文本框内容变化时调用
                                   //onChange={() => {}}
                            // 文本框内容变化时调用，变化后的文字内容会作为参数传递
                                   onChangeText={(changedText) => {
                                       let isShow = changedText.toString().length > 0;
                                       this.setState({
                                           showClearUsernameBtn: isShow,
                                           username: changedText
                                       });

                                       this._changeLoginBtnColor();
                                   }}
                            // 当文本输入结束后调用
                                   //onEndEditing={() => {}}
                            // 当文本框获取焦点时调用
                                   //onFocus={() => {}}
                            // 当组件挂载或布局变化时调用
                                   //onLayout={() => {}}
                            // 键盘确认、回车按钮按下时调用
                                   //onSubmitEditing={() => {}}
                            // 决定"确认"按钮显示的内容，有平台区别
                                   //iosreturnKeyType={'done'}
                            // 按密码格式显示输入内容
                                   secureTextEntry={false}
                        />
                        {this.state.showClearUsernameBtn ?
                            <TouchableOpacity onPress={() => this._clearUsername()}>
                                <Icon name={"ios-close-circle-outline"} size={20} color={"#999"}/>
                            </TouchableOpacity> :
                            <View/>
                        }
                    </View>
                    <View style={[styles.inputItem, {marginTop: 10}]}>
                        <Icon name={"ios-lock"} size={20} color={"#999"}/>
                        <TextInput style={styles.textInput}
                            // 提示内容
                                   placeholder={"密码"}
                            // 提示内容颜色
                                   placeholderTextColor={"#999"}
                                   // 内容
                                   value={this.state.password}
                            // 自动大写方式 none, sentences, words, characters
                                   autoCapitalize={"none"}
                            // 自动纠错
                                   autoCorrect={false}
                            // 自动获取焦点，在componentDidMount后，默认false
                                   //autoFocus={false}
                            // 提交释放焦点，单行默认true, 多行默认false, 多行true时，按Enter释放焦点，触发onSubmitEditing而不换行
                                   blurOnSubmit={true}
                            // 是否隐藏光标
                                   caretHidden={false}
                            // 设置显示的默认值
                                   defaultValue={""}
                            // 是否可编辑
                                   editable={true}
                            // 键盘类型
                                   keyboardType={"name-phone-pad"}
                            // 最大字节长度
                                   maxLength={25}
                            // 是否为多行，默认false
                                   multiline={false}
                            // 失去焦点时的回调
                                   //onBlur={() => {}}
                            // 文本框内容变化时调用
                                   //onChange={() => {}}
                            // 文本框内容变化时调用，变化后的文字内容会作为参数传递
                                   onChangeText={(changedText) => {
                                       let isShow = changedText.toString().length > 0;
                                       this.setState({
                                           showClearPasswordBtn: isShow,
                                           password: changedText
                                       });

                                       this._changeLoginBtnColor();
                                   }}
                            // 当文本输入结束后调用
                                   //onEndEditing={() => {}}
                            // 当文本框获取焦点时调用
                                   //onFocus={() => {}}
                            // 当组件挂载或布局变化时调用
                                   //onLayout={() => {}}
                            // 键盘确认、回车按钮按下时调用
                                   //onSubmitEditing={() => {}}
                            // 决定"确认"按钮显示的内容，有平台区别
                                   //iosreturnKeyType={'done'}
                            // 按密码格式显示输入内容
                                   secureTextEntry={true}
                        />
                        {this.state.showClearPasswordBtn ?
                            <TouchableOpacity underlayColor={"#666"} onPress={() => this._clearPassword()}>
                                <Icon name={"ios-close-circle-outline"} size={20} color={"#999"}/>
                            </TouchableOpacity> :
                            <View/>
                        }
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20, marginTop: 10}}>
                        <TouchableOpacity underlayColor={"#529ED6"} onPress={()=> this._forgetPassword()}>
                            <Text style={{fontSize: 12, color: "#529ED6"}}>忘记密码</Text>
                        </TouchableOpacity>

                        <TouchableOpacity underlayColor={"#529ED6"} onPress={()=> this._register()}>
                            <Text style={{fontSize: 12, color: "#529ED6"}}>我是新用户</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => this._login()} style={{backgroundColor: this.state.loginBtnColor, borderRadius: 2, marginLeft: 20, marginRight: 20, marginTop: 40, flexDirection: "row",
                        justifyContent: "center", alignItems: "center", paddingTop: 10, paddingBottom: 10}}>
                        <Text style={{fontSize: 16, color: "#fff"}}>登 录</Text>
                    </TouchableOpacity>

                </View>
                <View style={{position: "absolute", top: Util.size.height - 160}}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <View style={{backgroundColor: "#eee", height: 0.5, width: Util.size.width / 2 - 80}}/>
                        <Text style={{fontSize: 14, color: "#ccc"}}>其他登录方式</Text>
                        <View style={{backgroundColor: "#eee", height: 0.5, width: Util.size.width / 2 - 80}}/>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-around", paddingTop: 30, paddingBottom: 30,
                        height: 160
                    }}>
                        <Image style={{width: 40, height: 40}} source={{uri: "icon_login_qq"}}/>
                        <Image style={{width: 40, height: 40}} source={{uri: "icon_login_wechat"}}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        borderRadius: 2,
    },
    inputContainer: {
        width: Util.size.width,
        position: "absolute",
        top: Util.size.height / 2 - 100
    },
    inputItem: {
        height: 30,
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        alignItems: "center",
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    textInput: {
        height: 30,
        flex: 1,
        paddingLeft: 10,
        paddingTop: 0,
        paddingBottom: 0
    },
    btnStyle: {
        //backgroundColor: this.state.loginBtnColor,
        backgroundColor: "#ccc",
        borderRadius: 2,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10
    }
});
