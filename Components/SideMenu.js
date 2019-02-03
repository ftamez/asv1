import React from "react";

import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image } from "react-native";

import CustomIcon from "./CustomIcon";

import styles from "./Styles/SideMenuStyles";

import { withNavigation } from "react-navigation";

class SideMenu extends React.Component {
  goToInicio = () => {
    const { navigation } = this.props;

    navigation.navigate("Inicio");
  };

  goToInfo = () => {
    const { navigation } = this.props;

    navigation.navigate("Info");
  };

  goToGaleria = () => {
    const { navigation } = this.props;

    navigation.navigate("Galeria");
  };

  goToEventos = () => {
    const { navigation } = this.props;

    navigation.navigate("Explore");
  };

  goToTienda = () => {
    const { navigation } = this.props;

    navigation.navigate("Tienda");
  };

  goToSeguidoresVIP = () => {
    const { navigation } = this.props;

    navigation.navigate("SeguidoresVIP");
  };

  goToContacto = () => {
    const { navigation } = this.props;

    navigation.navigate("Contacto");
  };

  goToIngresa = () => {
    const { navigation } = this.props;

    navigation.navigate("Ingresa");
  };

  goToRegistrate = () => {
    const { navigation } = this.props;

    navigation.navigate("Registrate");
  };



  render() {
    return (
      <SafeAreaView style={{ flex:1 }}>
      <View style={{height:150,backgroundColor:'white', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/logoas.jpg')} style={{ height: 120, width: 120, borderRadius: 60 }} />
      </View>  
        <ScrollView contentContainerStyle={styles.menu}>
          <TouchableOpacity onPress={this.goToInicio}>
            <View style={styles.row}>
              <Text style={styles.title}>Inicio</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToEventos}>
            <View style={styles.row}>
              <Text style={styles.title}>Eventos</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToGaleria}>
            <View style={styles.row}>
              <Text style={styles.title}>Galeria de Fotos</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToTienda}>
            <View style={styles.row}>
              <Text style={styles.title}>Tienda</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToSeguidoresVIP}>
            <View style={styles.row}>
              <Text style={styles.title}>Seguidores VIP</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToContacto}>
            <View style={styles.row}>
              <Text style={styles.title}>Contacto</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToIngresa}>
            <View style={styles.row}>
              <Text style={styles.title}>Ingresa</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToRegistrate}>
            <View style={styles.row}>
              <Text style={styles.title}>Registrate</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView>
    </ScrollView>
  </SafeAreaView> 
    );
  }
}

export default withNavigation(SideMenu);
