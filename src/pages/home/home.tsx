import React from 'react';

import { View, Text, SafeAreaView } from "react-native";

import style from './style'

export default class Home extends React.Component 
{
    render() {
        return(
            <SafeAreaView style={style.container}>
                <View style={style.view}>
                    <Text>AAAaa</Text>
                </View>
            </SafeAreaView>
        )
    }
}