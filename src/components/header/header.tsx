import React from 'react';

import { View, Text, Image, TouchableOpacity} from "react-native";

import style from './style'
import ParamsHeader from '../../entities/headerParameter';

import UserImg from '../../../assets/17004.png'

import {FontAwesome, Feather} from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native'
import IconButton from '../buttons/iconButton';


export default function Header(props:ParamsHeader)
{
    
    if(props.params.hasLogo && props.params.hasImage && !props.params.hasBackButton)
    {
        console.log("Abriu");
        return(
            <View style={style.headerBody}>
                <View/>
                <Text style={{marginLeft:40}}>Dev Jobs</Text>
                <Image source={UserImg} style={{width:40,height:40}}></Image>
            </View>
        );
    }
    if(props.params.hasLogo && !props.params.hasImage && props.params.hasBackButton)
    {
        const navigate = useNavigation();
        console.log("Abriu");
        return(
            <View style={style.headerBody}>
                <IconButton color="white" iconName="arrow-left" onPress={()=>{navigate.goBack()}}/>
                <Text style={{marginRight:28}}>Dev Jobs</Text>
                <View/>
            </View>
        );
    }
    return(
        <View>
            <Text>
                aaaa
            </Text>
        </View>
    );
}
