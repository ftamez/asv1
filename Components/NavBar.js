import React from "react";

import { 
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
 } from "react-native";

import CustomIcon from "./CustomIcon";

import styles from "./Styles/NavBarStyles";

import { withNavigation } from "react-navigation";

class NavBar extends React.Component {

  backButton = () => {
    const { leftButton } = this.props;
    if (leftButton){
      return (
        <TouchableOpacity onPress={() => alert('back')}>
          <CustomIcon name="params" style={styles.favIco} />
        </TouchableOpacity>   
      )
    }
  }
  rightButton = () => {
    const { rightButton, favorite } = this.props;
    if (rightButton){
      if (favorite){
        return (
          <TouchableOpacity>  
            <CustomIcon
              name="params"
              style={[styles.barButtonIco, styles.favorite]}
            />
          </TouchableOpacity>
  
        )
      } else {
        return (
          <CustomIcon
            name="params"
            style={[styles.barButtonIco]}
          />
        )
      }
    }
  };

  render() {
    const { title, transparent } = this.props;
    return (
      <View {...this.props} style={styles.navBar}>
        <View style={styles.leftContainer}>{this.backButton()}</View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>{this.rightButton()}</View>
      </View>
    );
  }
}

export default withNavigation(NavBar);
