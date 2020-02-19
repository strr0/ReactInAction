//  chapter2. Props(属性)

import React, {Component} from 'react'
import {View, Text} from 'react-native'

class Greeting extends Component{
  render() {
    return(
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    )
  }
}

export default class LotsOfGreeting extends Component{
  render() {
    return(
      <View>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    )
  }
}
