import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Job } from '../../model/job';
import {Feather} from '@expo/vector-icons';
import google from '../../../assets/google.png'
import { TouchableOpacity } from 'react-native';

type JobCardProps = {
    job: Job,
    large?: boolean
}

const JobCard = ({ job }: JobCardProps) => {
    const [bgColor, setBgColor] = useState<'black' | 'white'>(job.isMarked ? 'black' : 'white');
    const [textColor, setTextColor] = useState<'black' | 'white'>(job.isMarked ? 'white' : 'black');

    const seeDetails = () => {

    }
    
    const styles = StyleSheet.create({
        container: {
            width:230,
            height:120,
            backgroundColor: bgColor,
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
            marginBottom:4
        },
        titleText: {
            color:textColor,
            fontFamily:"Roboto_500Medium"
        },
        detailContainer: {
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            marginBottom:4
        },
        typeContainer: {
            display:"flex",
            padding:2,
            backgroundColor:'#545454',
            height:18,
            justifyContent:"center",
            alignItems:'center',
            borderRadius:6
        },
        typeText: {
            fontFamily:'Roboto_300Light',
            fontSize:12,
            opacity:0.8, 
            color:bgColor,
            marginRight:4
        },
        companyContainer: {
            display:'flex',
            justifyContent:'flex-end',
            flex:1
        },
        companyDetailContainer: {
            height:30,
            display:'flex',
            flexDirection:'row',
            marginLeft:-5
        },
        companyLogo: {
            width:35,
            height:35,
            marginRight:10
        },
        companyTextContainer: {
            display:'flex',
            flexDirection:'column',
            paddingVertical:4
        },
        companyText: {
            color:textColor, 
            fontFamily:'Roboto_500Medium',
            fontSize:12, 
            marginBottom:1
        },
        locationText: {
            color:textColor, 
            fontFamily:'Roboto_100Thin',
            fontSize:10
        }
    });

    const pipeTitle: (e: string) => string = (text: string) => {
        if(text.length > 25) {
            return text.substring(0, 25) + '...';
        }
        return text
    }

    const setMarked = () => {
        if(job.isMarked) {
            job.isMarked = false;
            setBgColor('white');
            setTextColor('black');
        } else {
            job.isMarked = true;
            setBgColor('black');
            setTextColor('white');
        }
    }

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{ pipeTitle(job.title) }</Text>
                <TouchableOpacity onPress={() => setMarked()}>
                    <Feather name='bookmark' color="gray" size={20}></Feather>
                </TouchableOpacity>
            </View>
            
            <View style={styles.detailContainer}>
                <View style={styles.typeContainer}>
                    <Text style={styles.typeText}>{ job.type }</Text>
                </View>
            </View>

            <View style={styles.companyContainer}>
                <View style={styles.companyDetailContainer}>
                    <Image source={google} style={styles.companyLogo}/>
                    <View style={styles.companyTextContainer}>
                        <Text style={styles.companyText}>{ pipeTitle(job.company) }</Text>
                        <Text style={styles.locationText}>{ job.location }</Text>
                    </View>
                </View>
            </View>
            
        </TouchableOpacity>
    );
}

export default JobCard;