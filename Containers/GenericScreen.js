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
 import TabBar from "../Components/TabBar";

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
      favorite: false
    };
  }

   pressFavorite = () => {
    const { favorite } = this.state;
    this.setState({
      favorite: !favorite
    });
  };

  render() {
    console.log("render");

    const { favorite } = this.state;
    return (
      <View style={[styles.mainScreen]}>
        <NavBar leftButton={true} title="Categories" />
        <View style={styles.container}>{/* */}</View>
        <TabBar selected="Instagram" />
      </View>
    );
  }
}  