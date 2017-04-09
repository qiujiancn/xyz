/**
 * Day 5
 * find my location
 */
'use strict';

import React,{ Component } from 'react';
import { Platform,Image,StatusBar,StyleSheet,Text,TouchableHighlight,View } from 'react-native';
import Util from './utils';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export class Map extends Component{
    static defaultProps = {
        mapType: 'standard',
    };

    static propTypes = {
        mapType: React.PropTypes.oneOf(['standard', 'satellite','hybrid']),
    };

    constructor() {
        super();
        this.state = {
            isFirstLoad: true,
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    _onRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return(
            <View>
                <MapView
                    //provider={PROVIDER_GOOGLE}
                    style={this.props.mapStyle}
                    mapType = {this.props.mapType}
                    //showsUserLocation={this.props.showsUserLocation}
                    //followUserLocation={this.props.followUserLocation}
                    onRegionChange={this._onRegionChange}
                    region={this.state.region}/>
            </View>
        )
    }
}

export default class extends Component{
    constructor() {
        super();
        this.state = {
            showGeo:false
        };
    }

    componentDidMount() {
        if(Platform.OS === "ios"){
            StatusBar.setBarStyle(0);
        }
    }

    _getLocation() {
        this.setState({
            showGeo: true
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Map mapTyle="standard" mapStyle={styles.map} showsUserLocation={this.state.showGeo} followUserLocation={this.state.showGeo}></Map>
                <TouchableHighlight underlayColor="#00bd03" style={styles.btn} onPress={() => this._getLocation()}>
                    <Text style={styles.btnText}><Icon size={18} name="md-navigate"> </Icon> Find my location</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        paddingTop: 60
    },
    map:{
        width: Util.size.width,
        height: Util.size.height-120
    },
    btn:{
        backgroundColor:"#00a803",
        width: Util.size.width-80,
        height: 40,
        borderWidth:Util.pixel,
        borderColor: "#009302",
        borderRadius: 4,
        justifyContent:"center",
        marginTop:10
    },
    btnText:{
        textAlign:"center",
        fontSize:18,
        color:"#fff"
    },
});