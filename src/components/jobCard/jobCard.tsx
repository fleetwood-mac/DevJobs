import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Job } from '../../model/job';
import {Feather} from '@expo/vector-icons';

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
            backgroundColor: cardColor()
        },
        titleContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        titleText: {
            
        },
        detailContainer: {
            
        },
        typeText: {
    
        }
    });

    return (
        <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{job.title}</Text>
            <Feather name="bookmark" size={28} color={"lightgray"}/>
        </View>
        <View style={styles.detailContainer}>
            <Text style={styles.typeText}>{job.type}</Text>
        </View>
        </View>
    );
}

export default JobCard;