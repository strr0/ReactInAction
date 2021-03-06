//  chapter6. 使用Flexbox布局

import React, {Component} from 'react'
import {View} from 'react-native'

export default class FixedDimensionsBasics extends Component{
  render() {
    return(
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}
