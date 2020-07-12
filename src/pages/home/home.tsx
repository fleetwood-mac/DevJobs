import React, { useState, useEffect } from 'react';

import { useFonts, Roboto_900Black, Roboto_500Medium, Roboto_300Light, Roboto_100Thin } from '@expo-google-fonts/roboto';

import { View, Text, SafeAreaView, Button, NativeSyntheticEvent, TextInputEndEditingEventData, Image, GestureResponderEvent, ScrollView } from "react-native";

import {Feather} from '@expo/vector-icons';

import google from '../../../assets/google.png'

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
  

const Home = ({ navigation }: HomeProps) => 
{
    let [filterValue,setFilterValue] = useState("");

    let jobMock : Job = 
    {
        "id": "ca0b5423-240b-4979-9cab-b863e9a04f4a",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/ca0b5423-240b-4979-9cab-b863e9a04f4a",
        "created_at": new Date("Fri Jul 10 09:05:14 UTC 2020"),
        "company": "Echobot Media Technologies GmbH",
        "company_url": "https://www.echobot.de/",
        "location": "Karlsruhe (Germany)",
        "title": "Fullstack PHP-Entwickler",
        "description": "<p><strong>Fullstack PHP-Entwickler (m/w/d)</strong></p>\n<p>Echobot ist ein führender Anbieter von Cloud Software für Sales &amp; Marketing Intelligence im europäischen Raum. Bereits heute nutzen über 1.000 Unternehmen aller Branchen und Größen die Lösungen von Echobot zur Digitalisierung ihrer Marketing- und Vertriebsprozesse. Deine Aufgabe ist es, unsere Tools noch besser zu machen. Dazu betreust Du deren kompletten Software-Lifecycle-Prozess: von der Konzeption neuer Features über die Implementierung, das Testing und schlussendlich auch deren Betrieb.</p>\n<p><strong>Deine Aufgaben:</strong></p>\n<ul>\n<li>Du entwickelst Frontend, Middleware, Backend und Batch-Prozesse für unsere SaaS-Software.</li>\n<li>Du übernimmst eigene Projekte und triffst selbstständig Entscheidungen.</li>\n<li>Du arbeitest gemeinsam im Team an umfangreicheren Projekten.</li>\n<li>In Deinen Projekten bist Du für den kompletten Software-Lifecycle verantwortlich.</li>\n<li>Du bist im Austausch mit unserer Forschungsabteilung und arbeitest Dich regelmäßig in neueste Technologien ein.</li>\n</ul>\n<p><strong>Was wir Dir bieten:</strong></p>\n<ul>\n<li>Du entscheidest selbst, ob Du 32, 35 oder 40 Stunden arbeiten möchtest (Rufbereitschaft nicht erforderlich).</li>\n<li>Ein familiäres Arbeitsumfeld: Kein Dresscode, Duz-Kultur und regelmäßige Aktivitäten, z.B. der Entwickler-Pub-Abend.</li>\n<li>Bei uns entwickelst Du richtige Software, KEINE Plugins für Shop- oder CMS-Systeme.</li>\n<li>Deine Chefs sind Informatiker und verstehen Dich.</li>\n<li>Wir sind ein technikaffines Unternehmen und möchten Dich langfristig fördern und fordern.</li>\n<li>Die Möglichkeit, Deine Kollegen vor Vertragsunterzeichnung kennen zu lernen.</li>\n<li>Bei uns gibt es eine Kaffee- &amp; Obst-Flatrate sowie eine gratis Snackbox.</li>\n</ul>\n<p><strong>Was Du mitbringen solltest:</strong></p>\n<ul>\n<li>Du bringst ein abgeschlossenes Studium oder relevante Berufserfahrung mit.</li>\n<li>Du besitzt bereits gute Programmierkenntnisse.</li>\n<li>Du kannst gut mit Menschen umgehen und arbeitest gerne im Team.</li>\n<li>Du beherrschst bereits Technologien wie PHP7, Git/Mercurial, Linux, SSH, Mysql/PostgreSQL, Kafka/Redis, Solr/Elasticsearch, AngularJS und VueJS. Den Rest lernst Du bei uns dazu.</li>\n</ul>\n<p><strong>Interessiert?</strong></p>\n<p>Wir freuen uns auf deine Bewerbung. Bitte benutze dafür unser <a href=\"https://ltpx.nl/uvstvZu\"><strong>Online Bewerbungstool</strong></a> und schick uns deine Bewerbungsunterlagen.<img src=\"https://camo.githubusercontent.com/236c66295406e285c463f7442dc7caa1fd75fc52/68747470733a2f2f62636f6e74726f6c2e62726f636b6d657965722e6e6c2f747261636b2e7068703f6f7264657269643d313731373537\"></p>\n",
        "how_to_apply": "<p><a href=\"https://ltpx.nl/dGMnX8Y\">Click here to apply</a></p>\n",
        "company_logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
    }

    let [fontsLoaded] = useFonts({
        Roboto_900Black,
        Roboto_500Medium,
        Roboto_300Light,
        Roboto_100Thin
      });

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

                            <JobCard job={jobMock}/>

                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:18}}><Text style={{fontFamily:'Roboto_500Medium',fontSize:18}}>Vagas recentes</Text><Text style={{fontFamily:'Roboto_100Thin',fontSize:12,opacity:0.8}}>Ver todas</Text></View>
                        
                        <View style={{display:'flex',flexDirection:'column',height:'100%'}}>
                            
                            <JobCardSmall image={google} description="aaaaaa" company="Google Inc."/>

                        </View>
                    
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
      }
        
}

export default Home;