import React from 'react';
import { StackNavigator } from 'react-navigation';
import TabBarController from "./TabBarController";
import Ninetieth from "./Ninetieth";


const AppNavigator = StackNavigator({
    Main: {
        screen: TabBarController
    },
    Ninetieth: {
        screen: Ninetieth
    }
});

export default AppNavigator;
