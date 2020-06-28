import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Job } from '../../../model/job';
import axios from 'axios';

// import { Container } from './styles';
type JobSearchProps = {
    searchTerm: string;
}

const JobSearch = ({ searchTerm }: JobSearchProps) => {
    const [search, setSearch] = useState<string>(searchTerm);
    const [jobs, setJobs] = useState<Job[]>([new Job()]);

    const doSearch = () => {
        axios
            .get('https://jobs.github.com/positions/2acc9ea1-908e-4881-a351-3f5d4bf96a7f.json?markdown=true')
            .then(response => setJobs(response.data as Job[]))
    }

    return (
        <View>
            <TextInput 
                value={search}
                onChangeText={text => setSearch(text)}
            />
            <Button title="teste" onPress={doSearch}/>
        </View>
    );
}

export default JobSearch;