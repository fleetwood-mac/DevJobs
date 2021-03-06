import React, { useState, useEffect } from 'react';

import { useFonts, Roboto_900Black, Roboto_500Medium, Roboto_300Light, Roboto_100Thin } from '@expo-google-fonts/roboto';

import { View, Text, SafeAreaView, Button, NativeSyntheticEvent, TextInputEndEditingEventData, Image, GestureResponderEvent, ScrollView, FlatList } from "react-native";

import {Feather} from '@expo/vector-icons';

import google from '../../../assets/google.png'

import axios from 'axios';
import style from './style'
import Header from '../../components/header/header';
import ParamsHeader from '../../entities/headerParameter';
import InputText from '../../components/inputText/inputText';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';
import IconButton from '../../components/buttons/iconButton';
import JobCardSmall from '../../components/jobCardSmall/jobCardSmall';
import JobCard from '../../components/jobCard/jobCard';
import { Job } from '../../model/job';

let headerConfig : ParamsHeader = 
{
    params:
    {
        hasBackButton:false,
        hasImage:true,
        hasLogo:true
    }
}
interface HomeProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
  
let [jobHighlight, setJobHighlight] = useState<Array<Job>>([]) ;

const Home = ({ navigation }: HomeProps) => 
{
    let [filterValue,setFilterValue] = useState("");

    useEffect(()=>
    {
        doSearch();
    },[])

    let [fontsLoaded] = useFonts({
        Roboto_900Black,
        Roboto_500Medium,
        Roboto_300Light,
        Roboto_100Thin
      });

    const doSearch = async () => 
    {
        let response = await axios.get(`https://jobs.github.com/positions.json?page=1&markdown=true`);
        let insert = response.data.slice(0,5) as Job[];
        setJobHighlight(insert);
        console.log(insert);
    }

    const findJobs = (event:NativeSyntheticEvent<TextInputEndEditingEventData> | GestureResponderEvent) =>
    {
        navigation.navigate('JobSearch', { searchTerm: filterValue })
    }

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

                    <ScrollView style={{paddingTop:25}}>
                        <Text style={{marginBottom:8}}>Bem vindo!</Text>
                        <Text style={{fontFamily:'Roboto_900Black',fontSize:30,flexWrap:"wrap",marginBottom:30}}>O que quer encontrar de novo hoje?</Text>
                        
                        <View style={{marginBottom:30, flexDirection: "row", justifyContent: 'space-around', alignItems: 'center'}}>
                            <InputText value={filterValue} onChangeText={(e)=>{setFilterValue(e)}} onEndEditing={findJobs} placeholder="Qual vaga deseja pesquisar?"></InputText>
                            <IconButton color="black" iconName="search" onPress={findJobs}/>
                        </View>

                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:18}}><Text style={{fontFamily:'Roboto_500Medium',fontSize:18}}>Vagas em destaque</Text><Text style={{fontFamily:'Roboto_100Thin',fontSize:12,opacity:0.8}}>Ver todas</Text></View>
                        {/* cards populares */}
                            {/* <View style={{width:230,height:120,backgroundColor:"black",borderRadius:10,padding:12,paddingLeft:14,display:'flex',flexDirection:'column'}}>
                                
                                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:4}}>
                                    <Text style={{color:"white",fontFamily:"Roboto_500Medium"}}>Vaga pra se fuder de graça</Text>
                                    <Feather name='bookmark' color="white"></Feather>
                                </View>
                                
                                <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginBottom:4}}>
                                    <Text style={{fontFamily:'Roboto_100Thin',fontSize:12,opacity:1, color:"white",marginRight:4}}>R$10-15/Decada</Text> 
                                    <View style={{display:"flex",padding:2,backgroundColor:'#545454',height:18,justifyContent:"center",alignItems:'center',borderRadius:6}}>
                                        <Text style={{fontFamily:'Roboto_300Light',fontSize:12,opacity:0.8, color:"white",marginRight:4}}> 24/7</Text>
                                    </View>
                                </View>

                                <View style={{display:'flex',justifyContent:'flex-end',flex:1}}>
                                    <View style={{height:30,display:'flex',flexDirection:'row',marginLeft:-5}}>
                                        <Image source={google} style={{width:35,height:35,marginRight:10}}/>
                                        <View style={{display:'flex',flexDirection:'column',paddingVertical:4}}>
                                            <Text style={{color:"white", fontFamily:'Roboto_500Medium',fontSize:12, marginBottom:1}}>Google Inc.</Text>
                                            <Text style={{color:"white", fontFamily:'Roboto_100Thin',fontSize:10}}>California</Text>
                                        </View>
                                    </View>
                                </View>
                                
                            </View> */}

                            <JobCard job={jobHighlight[0]}/>

                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:18}}><Text style={{fontFamily:'Roboto_500Medium',fontSize:18}}>Vagas recentes</Text><Text style={{fontFamily:'Roboto_100Thin',fontSize:12,opacity:0.8}}>Ver todas</Text></View>
                        
                        <View style={{display:'flex',flexDirection:'column',height:'100%'}}>
                            
                        <FlatList 
                            data={jobHighlight}
                            renderItem={({ item }) => <JobCardSmall job={item} />}
                            keyExtractor={(item,index) => 'key'+index}
                        />

                        </View>
                    
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
      }
        
}

export default Home;