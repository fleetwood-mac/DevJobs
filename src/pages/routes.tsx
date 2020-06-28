import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home/home';
import JobSearch from './jobs/jobSearch/jobSearch';

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
                <appStack.Screen name="JobSearch" component={JobSearch}/>
            </appStack.Navigator>
        </NavigationContainer>
    );
}