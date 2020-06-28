import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home/home';
import JobDetails from './jobs/jobDetails/jobDetails';

const appStack = createStackNavigator();

export default function Routes()
{
    let appStackScreenOptions =
    {
        headerShown:false
    }

    return(
        <NavigationContainer>
            <appStack.Navigator screenOptions={appStackScreenOptions}>
                <appStack.Screen name="Home" component={Home}/>
                <appStack.Screen name="JobDetail" component={JobDetails}/>
            </appStack.Navigator>
        </NavigationContainer>
    );
}