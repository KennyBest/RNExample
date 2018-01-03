import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class Second extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{
                backgroundColor: 'blue',
                flex: 1
            }}>
                <Button title={'Go Ninetieth'} onPress={ () =>
                   // alert(navigation)
                    navigation.navigate('Ninetieth')
                }/>
            </View>
        );
    }
}
