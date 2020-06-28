import React, { useState, useEffect } from 'react';

import { View, Text, SafeAreaView, Button } from "react-native";

import style from './style'
import { Job } from '../../model/job';

import axios from 'axios';
import JobDetails from '../jobs/jobDetails/jobDetails';

type stateType = {
    job: Job
}

export default class Home extends React.Component<any, stateType> 
{
    constructor(props) {
        super(props);
        this.state = {
            job: new Job()
        };
    }
    componentDidMount() {
        axios
            .get('https://jobs.github.com/positions/2acc9ea1-908e-4881-a351-3f5d4bf96a7f.json?markdown=true')
            .then(response => this.setState({job: response.data as Job}))
    }

    render() {
        return(
            <SafeAreaView style={style.container}>
                <View style={style.view}>
                    <JobDetails job={this.state.job} />
                </View>
            </SafeAreaView>
        )
    }
}