import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Job } from '../../model/job';
import {Feather} from '@expo/vector-icons';
import ImageButton from '../buttons/imageButton';

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
            flexDirection: 'column',
            borderRadius: 10,
            backgroundColor: cardColor(),
            alignSelf: 'flex-start',
            width: 230,
            height: 120
        },
        titleContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        titleText: {
            
        },
        detailContainer: {
            backgroundColor: 'lightgray',
            alignSelf: 'flex-start',
            borderRadius: 10,
            padding: 3
        },
        typeText: {
            
        },
        companyContainer: {
            justifyContent:'flex-end'
        }
    });

    const pipeTitle: (e: string) => string = (text: string) => {
        if(text.length > 25) {
            return text.substring(0, 25) + '...';
        }
        return text
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{pipeTitle(job.title)}</Text>
                <Feather name="bookmark" size={28} color={"lightgray"}/>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.typeText}>{job.type}</Text>
            </View>
            <View style={styles.companyContainer}>
                <View>
                    <ImageButton source={{uri: job.company_logo}} />
                </View>
                <View>
                    <Text>{job.company}</Text>
                </View>
            </View>
        </View>
    );
}

export default JobCard;