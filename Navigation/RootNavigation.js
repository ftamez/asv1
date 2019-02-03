import {  
    createStackNavigator,  
    createBottomTabNavigator,  
    createDrawerNavigator,  
    createAppContainer
} from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";
import LoginScreen from "../Containers/auth/LoginScreen";
import SignUpScreen from "../Containers/auth/SignUpScreen";
import ForgotPasswordScreen from "../Containers/auth/ForgotPasswordScreen";

const RootNavigator = createStackNavigator(
    {
        LoginScreen: { screen: LoginScreen},
        SignUpScreen: { screen: SignUpScreen },
        ForgotPasswordScreen: { screen: SignUpScreen }
    },
    {
        headerMode: "none",
        cardStyle: { backgroundColor: "#f4f6f6"},
        initialRouteName: "LoginScreen"
    
    }
);

const AppRoot = createAppContainer(RootNavigator);

export default AppRoot;