import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import { Job } from '../../../model/job';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputText from '../../../components/inputText/inputText';
import IconButton from '../../../components/buttons/iconButton';
import Header from '../../../components/header/header';

// import { Container } from './styles';
type JobSearchProps = {
    searchTerm: string;
}

const JobSearch = ({ searchTerm }: JobSearchProps) => {
    const [search, setSearch] = useState<string>(searchTerm);
    const [jobs, setJobs] = useState<Job[]>([new Job()]);

    const doSearch = (text: string) => {
        setSearch(text)
        
        axios
            .get(`https://jobs.github.com/positions.json?search=${search}&markdown=true`)
            .then(response => setJobs(response.data as Job[]))
    }

    return (
        <SafeAreaView>
            <View style={styles.inputContainer}>
                <InputText value={search} onChangeText={doSearch} />
                <IconButton color="black" iconName="sliders"/>
            </View>
            <FlatList 
                data={jobs}
                renderItem={({ item }) => <Text>{item.title}</Text>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: 'center'
    },
    input: {
        width: '80%',
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 12,
        color: '#666967'
    },
    button: {

    }
});

export default JobSearch;