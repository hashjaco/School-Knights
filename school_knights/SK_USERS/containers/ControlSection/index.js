import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Container, InputGroup, Input, Spinner } from 'native-base'

export default class ControlSection extends Component {
  constructor(props){
    super(props);

    this.state = {
      location: null,
      destination: null
    }
  }
}