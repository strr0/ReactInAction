import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class Counter extends Component{
    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <View>
                <Text>{value}!</Text>
                <Button title='+' onPress={onIncrement} />
                <Button title='-' onPress={onDecrement} />
            </View>
        )
    }
}

export default connect(
    (state) => ({
        value: state.value
    }),
    (dispatch) => ({
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'})
    })
)(Counter)