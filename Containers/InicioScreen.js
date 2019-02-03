/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";

import styles from "./Styles/InicioScreenStyles";

import NavBar from "../Components/NavBar";
import CustomIcon from "../Components/CustomIcon";
import TabBar from "../Components/TabBar";

const COURSE = {
  image: 
    "https://paomosca.com/wp-content/uploads/2018/11/blackfriday-1024x536.png",
  title: "Bienvenido Compita",
  description: "Aqui encontraras las fechas de mis proximos eventos y las fotos que nos tomemos. Tambien, contenido VIP para mi gente especial y sin faltar las pinches redes sociales y el link de mi tienda pa que te compres una camisita o algo papa.",
  url:
    "https://www.udemy.com/curso-completo-de-react-native-y-mobx/?couponCode=RN_11_2018"
};
export default class InicioScreen extends Component {
  constructor(props) {
    super(props);
  }

  renderImage = () => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: COURSE.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    );
  };

  openUrl = () => {
    Linking.openURL(COURSE.url);
  };
  renderInfo = () => {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{COURSE.title}</Text>
        <Text style={styles.description}>{COURSE.description}</Text>
        <TouchableOpacity style={styles.button} onPress={this.openUrl}>
          <Text style={styles.buttonText}>Inicio</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderContent = () => {
    return (
      <ScrollView>
        {this.renderImage()}
        {this.renderInfo()}
      </ScrollView>
    );
  };

  render() {
    console.log("render");

    const { navigation } = this.props;

    return (
      <View style={[styles.mainScreen]}>
        <NavBar menuButton={true} rightButton={true} title="Inicio" />
        <View style={styles.container}>{this.renderContent()}</View>
        <TabBar selected="explore" />
      </View>
    );
  }
}
