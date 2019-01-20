/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * @format
 * @flow
 */

 //CABECERA
 import React, {Component} from 'react';
 import {Text, View, StyleSheet} from 'react-native';

 import styles from "./Styles/GenericScreenStyles"

 /*
<screen>
    <navbar>
        title
    </navbar>
        content
</screen>
 */

import NavBar from '../Components/NavBar';

export default class GenericScreen extends Component {
  static defaultNavigationOptions = {
    title: "Home"
  };
  constructor(props){
    super(props);

    this.state = {
      example: 5,
      favorite: false
    }
    console.log('constructor');
  }

   componentWillMount() {
       console.log("componentWillMount");
   }

   componentDidMount() {
       console.log("componentDidMount");
        
       setTimeout(() => {
           console.log("changing state");
           this.setState({
               var1: 2 
           });
       }, 500);

   }

   shouldComponentUpdate(nextProps, nextState) {
       console.log("shouldComponentUpdate");
       return true;
   }

   componentWillUpdate() {
       console.log("componentWillUpdate");
   }

   pressFavorite = () => {
    const { favorite } = this.state;
    this.setState({
      favorite: !favorite
    });
  }

   componentDidUpdate() {
       console.log("componentDidUpdate")
   }

   componentWillMount() {
       console.log("componentWillMount")
   }

    render() {
        console.log("render");
        const { favorite } = this.state
        return (
            <View>
                <NavBar
                    leftButton={true}
                    title="Inicio"
                    rightButton={true}
                    onPressFavorite={this.pressFavorite}
                    favorite={true} />
            </View>
        );
    }
}

 
 