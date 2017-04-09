/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    StatusBar,
    Navigator, //导航栏
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';      //两种字符图标
import IconFA from 'react-native-vector-icons/FontAwesome'; //两种字符图标
import Swiper from 'react-native-swiper'; //轮播图
import Util from './view/utils'
import Day1 from './view/day1'
import Day2 from './view/day2'
import Day5 from './view/day5'
import Day6 from './view/day6'
import Day7 from './view/day7'
import Day8 from './view/day8'
import Day9 from './view/day9'


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    mainView: {
        marginTop: 55
    },
    navBar: {
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    navTitle: {
        paddingTop: 10,
        fontSize: 18,
        fontWeight: "500",
    },
    navBackBtn: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 18,
        color: "#555",
    },
    itemWrapper:{
        backgroundColor: "#f3f3f3"
    },
    touchBox:{
        width: Util.size.width/3-0.33334,
        height:Util.size.width/3,
        backgroundColor:"#fff",
    },
    touchBoxContainer:{
        flexDirection: "row",
        flexWrap:"wrap",
        width: Util.size.width,
        borderTopWidth: Util.pixel,
        borderTopColor:"#ccc",
        borderLeftWidth: Util.pixel,
        borderLeftColor:"#ccc",
        borderRightWidth: Util.pixel,
        borderRightColor:"#ccc",
    },
    touchBox1:{
        borderBottomWidth: Util.pixel,
        borderBottomColor:"#ccc",
        borderRightWidth: Util.pixel,
        borderRightColor:"#ccc",
    },
    touchBox2:{
        borderBottomWidth: Util.pixel,
        borderBottomColor:"#ccc",
        borderLeftWidth: Util.pixel,
        borderLeftColor:"#ccc",
    },
    boxContainer:{
        alignItems:"center",
        justifyContent:"center",
        width: Util.size.width/3,
        height:Util.size.width/3,
    },
    boxIcon:{
        position:"relative",
        top:-10
    },
    boxText:{
        position:"absolute",
        bottom:15,
        width:Util.size.width/3,
        textAlign:"center",
        left: 0,
        backgroundColor:"transparent"
    },
    slide: {
        flexGrow: 1,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    slideText:{
        position:"absolute",
        bottom: 0,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:"rgba(255,255,255,0.5)",
        width: Util.size.width,
        textAlign:"center",
        fontSize: 12
    },
    image:{
        width: Util.size.width,
        height: 80,
        flexGrow: 1,
        alignSelf: "stretch",
        resizeMode: "cover"
    }
});

class MainView extends Component {
    constructor() {
        super();
        this.state = {
            days: [
                {
                    key: 0,
                    title: "A stopwatch",
                    component: Day1,
                    isFA: false,
                    icon: "ios-stopwatch",
                    size: 48,
                    color: "#ff856c",
                    hideNav: false
                },
                {
                    key:1,
                    title:"A weather app",
                    component: Day2,
                    isFA: false,
                    icon: "ios-partly-sunny",
                    size:60,
                    color:"#90bdc1",
                    hideNav: false,
                },
                {
                    key:2,
                    title:"twitter",
                    component: Day2,
                    isFA: false,
                    icon: "logo-twitter",
                    size:50,
                    color:"#2aa2ef",
                    hideNav: true,
                },
                {
                    key:4,
                    title:"twitter",
                    component: Day5,
                    isFA: false,
                    icon: "md-pin",
                    size:50,
                    color:"#2a43ef",
                    hideNav: false,
                },
                {
                    key:5,
                    title:"Spotify",
                    component: Day6,
                    isFA: true,
                    icon: "spotify",
                    size:50,
                    color:"#777",
                    hideNav: true,
                },
                {
                    key:6,
                    title:"Moveable Circle",
                    component: Day7,
                    isFA: false,
                    icon: "ios-baseball",
                    size:50,
                    color:"#5e2a06",
                    hideNav: true,
                },
                {
                    key:7,
                    title:"Swipe Left Menu",
                    component: Day8,
                    isFA: true,
                    icon: "google",
                    size:50,
                    color:"#4285f4",
                    hideNav: true,
                },
                {
                    key:8,
                    title:"Twitter Parallax View",
                    component: Day9,
                    isFA: true,
                    icon: "twitter-square",
                    size:50,
                    color:"#2aa2ef",
                    hideNav: true,
                },
            ]
        }
    }

    _onPressNav(index) {
        this.props.navigator.push({
            title: this.state.days[index].title,
            index: index + 1,
            display: !this.state.days[index].hideNav,
            component: this.state.days[index].component
        })
    }

    render() {
        const onThis = this;
        const boxs = this.state.days.map(function(elem, index) {
            return (
                <TouchableHighlight key={elem.key} style={[styles.touchBox,styles.touchBox1]} underlayColor="#eee" onPress={() => onThis._onPressNav(index)}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.boxText}>Day {index+1}</Text>
                        {elem.isFA? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA>:
                            <Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
                    </View>
                </TouchableHighlight>
            );
        })
        return (
            <ScrollView style={styles.mainView} title={this.props.title} >
                <Swiper height={150} showsButtons={false} autoplay={true} autoplayTimeout={1.5}
                    activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.8)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
                    <TouchableHighlight onPress={()=> onThis._onPressNav(0)}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('./view/img/day1.png')}></Image>
                            <Text style={styles.slideText}>Day1: Timer</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=> onThis._onPressNav(1)}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('./view/img/day2.png')}></Image>
                            <Text style={styles.slideText}>Day2: Weather</Text>
                        </View>
                    </TouchableHighlight>
                </Swiper>
                <View style = {styles.touchBoxContainer} >
                    {boxs}
                </View>
            </ScrollView>
        );
    }
}

class NavigationBar extends Navigator.NavigationBar {
    render() {
        let routes = this.props.navState.routeStack;
        if (routes.length) {
            let route = routes[routes.length - 1];
            if (route.display === false) {
                return null;
            }
        }
        return super.render();
    }
}

export default class ThirtyDaysStudy extends Component {
    componentDidMount() {
        StatusBar.setBarStyle(0);
    }
    configureScene(route, routeStack) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }
    routeMapper = {
        LeftButton: (route, navigator, index, navState) =>
        {
            if(route.index > 0) {
                return <TouchableOpacity
                    underlayColor='transparent'
                    onPress={() => {if (index > 0) {navigator.pop()}}}>
                    <Text style={styles.navBackBtn}><Icon size={18} name="ios-arrow-back"></Icon> back</Text>
                </TouchableOpacity>;
            } else {
                return null;
            }
        },
        RightButton: (route, navigator, index, navState) => { return null; },
        Title: (route, navigator, index, navState) => { return (<Text style={styles.navTitle}>{route.title}</Text>); },
    };

    render() {
        return (
            <Navigator initialRoute={{title: '30 Days of RN',index: 0,display: true,component: MainView,}}
                configureScene={this.configureScene}
                renderScene={(route, navigator) => {
                    return <route.component navigator={navigator} title={route.title} index={route.index} />
                }}
                navigationBar={
                    <NavigationBar
                        routeMapper={this.routeMapper}
                        style={styles.navBar}
                    />
                }
            />
        );
    }
}

AppRegistry.registerComponent('ThirtyDaysStudy', () => ThirtyDaysStudy);
