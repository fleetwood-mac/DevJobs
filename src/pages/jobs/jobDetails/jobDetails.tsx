import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Job } from '../../../model/job';
import axios from 'axios';
// import { Container } from './styles';

type JobDetailProps = {
    job: Job
}

const JobDetails = ({ job }: JobDetailProps) => {

    return (
        <View>
            <Text>{ job.title }</Text>
        </View>
    );
}



export default JobDetails;