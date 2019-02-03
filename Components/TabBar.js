import React from "react";
import { View, TouchableOpacity } from "react-native";

import { withNavigation } from "react-navigation";

import CustomIcon from "../Components/CustomIcon";

import styles from "./Styles/TabBarStyles";

class TabBar extends React.Component {
  navigate = route => {
    const { navigation } = this.props;
    switch (route) {
      case "explore":
        navigation.navigate({
          routeName: "Explore"
        });
        break;
      case "facebook":
        navigation.navigate({
          routeName: "facebook"
        });
        break;
      case "instagram":
        navigation.navigate({
          routeName: "instagram"
        });
        break;
      case "twitter":
        navigation.navigate({
          routeName: "twitter"
        });
        break;  
      case "youtube":
        navigation.navigate({
          routeName: "youtube"
        });
        break;
      /*          
      case "categories":
        navigation.navigate({
          routeName: "Categories"
        });
        break;
      case "favorites":
        navigation.navigate({
          routeName: "Favorites"
        });
        break;
      */  
    }
  };
  renderTab = ({ route, icon }) => {
    const { selected } = this.props;
    return (
      <TouchableOpacity style={styles.tab} onPress={() => this.navigate(route)}>
        <CustomIcon
          name={icon}
          style={[
            styles.tabIcon,
            selected === route ? styles.selectedIcon : null
          ]}
        />
        {selected === route && <View style={styles.tabLine} />}
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderTab({ route: "explore", icon: "home" })}
        {this.renderTab({ route: "categories", icon: "facebook-2" })}
        {this.renderTab({ route: "favorites", icon: "instagram" })}
        {this.renderTab({ route: "favorites", icon: "twitter" })}
        {this.renderTab({ route: "favorites", icon: "youtube" })}
      </View>
    );
  }
}

export default withNavigation(TabBar);