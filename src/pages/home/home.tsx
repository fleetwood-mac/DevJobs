import React, { useState, useEffect } from 'react';

import { View, Text, SafeAreaView, Button } from "react-native";

import style from './style'
import Header from '../../components/header/header';
import ParamsHeader from '../../entities/headerParameter';

let headerConfig : ParamsHeader = 
{
    params:
    {
        hasBackButton:true,
        hasImage:false,
        hasLogo:true
    }
}

export default function Home()
{


    return(
        <SafeAreaView style={style.container}>
            <View style={style.view}>
                <Header params={headerConfig.params}/>
            </View>
        </SafeAreaView>
    )
}