//  chapter3. State（状态）

import React, {Component} from 'react'
import {View, Text} from 'react-native'

class Blink extends Component{
  state = {isShowingText: true}
  componentDidMount() {
    setInterval(() => {
      this.setState({
        isShowingText : !this.state.isShowingText
      })
    }, 1000)
  }
  render() {
    if(!this.state.isShowingText) {
      return null
    }
    else {
      return(
        <Text>{this.props.text}</Text>
      )
    }
  }
}

export default class BlinkApp extends Component{
  render() {
    return(
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did them ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    )
  }
}
