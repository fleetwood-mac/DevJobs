import React from 'react';

import { View, Text, SafeAreaView } from "react-native";

import style from './style'

export default function Home()
{
    return(
        <SafeAreaView style={style.container}>
            <View style={style.view}>
                <Text>AAAaa</Text>
            </View>
        </SafeAreaView>
    )
}