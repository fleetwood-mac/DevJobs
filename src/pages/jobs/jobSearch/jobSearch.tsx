import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Job } from '../../../model/job';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputText from '../../../components/inputText/inputText';
import IconButton from '../../../components/buttons/iconButton';
import Header from '../../../components/header/header';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes';
import JobCard from '../../../components/jobCard/jobCard';

const JobSearch = () => {
    const { params: { searchTerm }} = useRoute<RouteProp<RootStackParamList, 'JobSearch'>>();
    const [search, setSearch] = useState<string>(searchTerm);
    const [jobs, setJobs] = useState<Job[]>();
    const [modal, setModal] = useState<boolean>(false);

    const doSearch = (text: string) => {
        setSearch(text);
        axios
            .get(`https://jobs.github.com/positions.json?search=${search}&markdown=true`)
            .then(response => setJobs(response.data as Job[]))
    }

    useEffect(() => doSearch(searchTerm), []);

    const headerParams = {
        hasImage: false,
        hasBackButton: true,
        hasLogo: true
    }

    return (
        <SafeAreaView>
            <Header params={headerParams} />
            <View style={styles.inputContainer}>
                <InputText value={search} onChangeText={doSearch} placeholder="Type a term to search"/>
                <IconButton color="black" iconName="sliders" onPress={() => setModal(true)}/>
            </View>
            <Modal
                presentationStyle="pageSheet"
                animationType="slide"
                transparent={false}
                visible={modal}
                onRequestClose={() => setModal(false)}
            >
                <SafeAreaView>
                    <Text>Hello World</Text>
                    <Button title="fechar" onPress={() => setModal(false)}></Button>
                </SafeAreaView>
            </Modal>
            <FlatList 
                data={jobs}
                renderItem={({ item }) => <JobCard job={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center'
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