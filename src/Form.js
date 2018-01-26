import React, { Component } from 'react'
import { ScrollView, View, KeyboardAvoidingView, Platform } from 'react-native'
import styled from 'styled-components/native'

// Flex: 1 will force the form to take up remaining height of the view
class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height: null
    }

    this.onLayout = this.onLayout.bind(this)
  }

  onLayout(e) {
    this.setState({
      height: e.nativeEvent.layout.height
    })
  }

  render() {
    const { children, ...rest } = this.props

    return (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "position"} keyboardVerticalOffset={50} onLayout={this.onLayout} style={{ flex: 1 }} >
        <ScrollView 
          contentContainerStyle={{ minHeight: this.state.height }} 
          >
          { children }            
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export default Form
