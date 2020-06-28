import React, { useState, useEffect } from 'react';

import { useFonts, Roboto_900Black, Roboto_500Medium } from '@expo-google-fonts/roboto';

import { View, Text, SafeAreaView, Button } from "react-native";


import style from './style'
import Header from '../../components/header/header';
import ParamsHeader from '../../entities/headerParameter';

let headerConfig : ParamsHeader = 
{
    params:
    {
        hasBackButton:false,
        hasImage:true,
        hasLogo:true
    }
}

export default function Home()
{
    let [fontsLoaded] = useFonts({
        Roboto_900Black,
        Roboto_500Medium
      });

      if(!fontsLoaded)
      {
          return(
            <SafeAreaView style={style.container}>
                <Text>Carregando</Text>
            </SafeAreaView>
          )
      }
      else
      {
        return(
            <SafeAreaView style={style.container}>
                <View style={style.view}>
                    <Header params={headerConfig.params}/>

                    <View style={{paddingTop:25}}>
                        <Text style={{marginBottom:8}}>Bem vindo!</Text>
                        <Text style={{fontFamily:'Roboto_900Black',fontSize:30,flexWrap:"wrap",marginBottom:30}}>O que quer encontrar de novo hoje?</Text>
                        
                        <View style={{height:50,backgroundColor:"green",borderRadius:10,marginBottom:30}}>

                        </View>

                        {/* cards populares */}
                        <View style={{display:'flex',flexDirection:'column'}}>
                            <View style={{display:'flex',flexDirection:'row'}}></View>
                            <View style={{width:230,height:120,backgroundColor:"black",borderRadius:10,padding:12,paddingLeft:14,display:'flex',flexDirection:'column'}}>
                                <Text style={{color:"white",fontFamily:"Roboto_500Medium"}}>Vaga pra se fuder de graça</Text>
                            </View>
                        </View>
                    
                    </View>
                </View>
            </SafeAreaView>
        );
      }
        
}