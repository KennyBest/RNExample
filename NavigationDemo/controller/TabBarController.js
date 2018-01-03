import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import First from "./First";
import Second from "./Second";

export default class TabBarController extends Component {
    state = {
        selected: 'First'
    };
    render() {
        const { navigation } = this.props;
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title={'First'}
                    selected={this.state.selected === 'First'}
                    onPress={ () => this.setState({
                        selected: 'First'
                    })}
                >
                    <First navigation={navigation} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title={'Second'}
                    selected={this.state.selected === 'Second'}
                    onPress={ () => this.setState({
                        selected: 'Second'
                    })}
                >
                    <Second navigation={navigation} />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

/*
const MyFirst = ({ navigation }) => (
    <First navigation={navigation} />
);
const MySecond = ({ navigation }) => (
    <Second navigation={navigation}/>
);

const SimpleTabs = TabNavigator({
    First: {
        screen: MyFirst,
    },
    Second: {
        screen: MySecond
    }
}, {
   tabBarOptions: {
       activeTintColor: 'skyblue'
   }
});
*/


// SimpleTabs -- 此时可以通过this.props.navigation获取导航
