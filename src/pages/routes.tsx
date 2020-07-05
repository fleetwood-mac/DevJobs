import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home/home';
import JobSearch from './jobs/jobSearch/jobSearch';
import { Job } from '../model/job';

export type RootStackParamList = {
    Home: undefined,
    JobSearch: { searchTerm: string },
    JobDetail: { Job: Job }
}

const RootStack = createStackNavigator<RootStackParamList>();

export default function Routes()
{
    let appStackScreenOptions =
    {
        headerShown:false
    }

    return(
        <NavigationContainer>
            <RootStack.Navigator screenOptions={appStackScreenOptions}>
                <RootStack.Screen name="Home" component={Home}/>
                <RootStack.Screen name="JobSearch" component={JobSearch}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}