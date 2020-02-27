import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={{height: 150, width: '100%', backgroundColor: '#512FDB', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#FFFFFF', fontWeight: "400", fontSize: 60 }}>{this.props.title}</Text>
            </View>
        )
    }
};