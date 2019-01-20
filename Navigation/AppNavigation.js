import {  
    createStackNavigator,  
    createBottomTabNavigator,  
    createDrawerNavigator,  
    createAppContainer
} from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";

const TabNav = createBottomTabNavigator(
    {
        Explore: { screen: GenericScreen},
        Categories: { screen: GenericScreen},
        Favorites: { screen: GenericScreen}
    },
    {
        headerMode: "none"
    }
)

const AppNavigator = createStackNavigator(
    {
        Home: { screen: TabNav },
    },
    {
        headerMode: "none"    
    }
);

const App = createAppContainer(AppNavigator);

export default App;