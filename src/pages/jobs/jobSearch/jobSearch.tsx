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
    const [jobs, setJobs] = useState<Job[]>([new Job()]);
    const [modal, setModal] = useState<boolean>(false);
    let [pagination, setPagination] = useState(1);
    let [isSearching, setIsSearching] = useState(false);

    const doSearch = () => {

        if(!isSearching)
        {
            axios
            .get(`https://jobs.github.com/positions.json?page=${pagination}&search=${search}&markdown=true`)
            .then(response =>
                {
                    setJobs(jobs.concat(response.data as Job[]));
                    setIsSearching(false);
                });
        }

    }

    const doSearchAgainPaginate = () =>
    {
        if(!isSearching)
        {
            setPagination(pagination++);
            doSearch();    
        }
    }

    const newSearch = () =>
    {
        setJobs([]);
        setPagination(1);
        doSearch();
    }

    useEffect(() => doSearch(), []);

    const headerParams = {
        hasImage: false,
        hasBackButton: true,
        hasLogo: true
    }

    return (
        <SafeAreaView>
            <Header params={headerParams} />
            <View style={styles.inputContainer}>
                <InputText value={search} onChangeText={setSearch} onEndEditing={newSearch} placeholder="Type a term to search"/>
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
                onEndReached={doSearchAgainPaginate}
                onEndReachedThreshold={0.5}
                keyExtractor={(item,index) => 'key'+index}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom:10
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