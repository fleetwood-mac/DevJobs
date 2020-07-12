import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Job } from '../../model/job';
import {Feather} from '@expo/vector-icons';
import ImageButton from '../buttons/imageButton';
import { TouchableHighlight } from 'react-native-gesture-handler';

type JobCardProps = {
    job: Job
}

const JobCard = ({ job }: JobCardProps) => {
    const cardColor = () => {
        if(job.isMarked) return 'black'

        return 'white';
    }
    const styles = StyleSheet.create({
        container: {
            width:230,
            height:120,
            backgroundColor:"black",
            borderRadius:10,
            padding:12,
            paddingLeft:14,
            display:'flex',
            flexDirection:'column'
        },
        titleContainer: {
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom:4,
        },
        titleText: {
            color:"white",
            fontFamily:"Roboto_500Medium"
        },
        detailContainer: {
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            marginBottom:4
        },
        typeText: {
            
        },
        companyContainer: {
            display:'flex',
            justifyContent:'flex-end',
            flex:1
        }
    });

    const pipeTitle: (e: string) => string = (text: string) => {
        if(text.length > 25) {
            return text.substring(0, 25) + '...';
        }
        return text
    }

    return (
        // <View style={styles.container}>
        //     <View style={styles.titleContainer}>
        //         <Text style={styles.titleText}>{pipeTitle(job.title)}</Text>
        //         <Feather name="bookmark" size={28} color={"lightgray"}/>
        //     </View>
        //     <View style={styles.detailContainer}>
        //         <Text style={styles.typeText}>{job.type}</Text>
        //     </View>
        //     <View style={styles.companyContainer}>
        //         <View>
        //             <ImageButton source={{uri: job.company_logo}} />
        //         </View>
        //         <View>
        //             <Text>{job.company}</Text>
        //         </View>
        //     </View>
        // </View>

        <View style={styles.container}>
                                        
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{pipeTitle(job.title)}</Text>
                <Feather name='bookmark' color="white"/>
            </View>

            <View style={styles.detailContainer}>
                <Text style={{fontFamily:'Roboto_100Thin',fontSize:12,opacity:1, color:"white",marginRight:4}}>R$10-15/Decada</Text> 
                <View style={{display:"flex",padding:2,backgroundColor:'#545454',height:18,justifyContent:"center",alignItems:'center',borderRadius:6}}>
                    <Text style={{fontFamily:'Roboto_300Light',fontSize:12,opacity:0.8, color:"white",marginRight:4}}>{job.type}</Text>
                </View>
            </View>

            <View style={styles.companyContainer}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <TouchableHighlight style={{width:35,height:35,marginRight:10}}>
                        <Image source={{uri: job.company_logo}} style={{width:35,height:35,marginRight:10}}/>
                    </TouchableHighlight>
                    
                    <View style={{display:'flex',flexDirection:'column',paddingVertical:4}}>
                        <Text style={{color:"white", fontFamily:'Roboto_500Medium',fontSize:12, marginBottom:1}}>Google Inc.</Text>
                        <Text style={{color:"white", fontFamily:'Roboto_100Thin',fontSize:10}}>California</Text>
                    </View>
                </View>
            </View>

        </View>);
}

export default JobCard;