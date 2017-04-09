/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
} from 'react-native';

export default class rnDemo extends Component {
  render() {
    return (
      <View style={{}}>
        <View style={ styles.row}>
          <View style={[styles.height160, styles.part_1_left,]}>
            <Text style={[styles.font14, styles.marTop18, styles.marLeft10, styles.green]}>我们约吧</Text>
            <Text style={[styles.font10, styles.marTop14, styles.marLeft10]}>恋爱家人好朋友</Text>
            <Image style={[styles.yue]}
                   source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}>
            </Image>
          </View>
            <View style={[styles.height160, styles.part_1_right,]}>
              <Text style={[styles.font14, styles.marTop18, styles.marLeft10, styles.green]}>2</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        paddingTop:20,
        height: 160,
    },
    part_1_left:{
        flex: 1,
        borderColor: '#DCD7CD',
        borderRightWidth: 0.5,
        borderBottomWidth: 1,
    },
    part_1_right:{
        flex:2,
        borderColor: '#DCD7CD',
        borderBottomWidth: 1,
    },
    marTop18:{
        marginTop:18,
    },
    marTop14:{
        marginTop:14,
    },
    font14:{
        fontSize:14,
    },
    font10:{
        fontSize:12,
    },
    height160:{
        height: 160
    },
    yue:{
        height:80,
        marginTop:10,
    },
    green:{
        color:'#55A44B',
        fontWeight: '900'
    },
    red:{
        color: '#FF3F0D',
        fontWeight: '900'
    },
    marLeft10:{
        marginLeft:10,
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnDemo', () => rnDemo);
