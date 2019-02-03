import {  
    createStackNavigator,  
    createBottomTabNavigator,  
    createDrawerNavigator,  
    createAppContainer
} from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";
import LoginScreen from "../Containers/auth/LoginScreen";
import ExploreScreen from "../Containers/ExploreScreen";
import CategoriesScreen from "../Containers/CategoriesScreen";
import RecipeDetailsScreen from "../Containers/RecipeDetailsScreen";


import FavoritesScreen from "../Containers/FavoritesScreen";
import CategoryScreen from "../Containers/CategoryScreen";


import InfoScreen from "../Containers/InfoScreen";
import SideMenu from "../Components/SideMenu";
import GaleriaDeFotos from "../Containers/GaleriaDeFotosScreen";
import InicioScreen from "../Containers/InicioScreen";
import EventosScreen from "../Containers/ExploreScreen";
import TiendaScreen from "../Containers/TiendaScreen";
import SeguidoresVIPScreen from "../Containers/SeguidoresVIPScreen";
import ContactoScreen from "../Containers/ContactoScreen";
import IngresaScreen from "../Containers/IngresaScreen";
import RegistrateScreen from "../Containers/RegistrateScreen";

/*
const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex:1 }}>
    <View style={{height:150,backgroundColor:'white', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../assets/logo.jpg')} style={{ height: 20, width: 120, borderRadius: 60 }} />
    </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  )
*/
const TabNav = createBottomTabNavigator(
    {
        Explore: { screen: ExploreScreen},
        //Categories: { screen: CategoriesScreen},
        //Favorites: { screen: FavoritesScreen},
        Facebook: { screen: CategoriesScreen},
        Instagram: { screen: GenericScreen},
        Youtube: { screen: GenericScreen},
        Twitter: { screen: GenericScreen}
    },
    {
        headerMode: "none",
        //initialRouteName: "LoginScreen",
        defaultNavigationOptions: { tabBarVisible: true }
    }
);

const Drawer = createDrawerNavigator(
    {
        Tabs: { 
            screen: TabNav 
        },
        LoginScreen: { screen: LoginScreen},
        Inicio: { screen: InicioScreen },
        Eventos: { screen: ExploreScreen },
        Galeria: { screen: GaleriaDeFotos },
        Tienda: { screen: TiendaScreen },
        SeguidoresVIP: { screen: SeguidoresVIPScreen },
        Contacto: { screen: ContactoScreen },
        Ingresa: { screen: IngresaScreen },
        Registrate: { screen: RegistrateScreen }
    },
    {
        contentComponent: SideMenu,
        initialRouteName: "LoginScreen"

    }
);

const AppNavigator = createStackNavigator(
    {
        //LoginScreen: { screen: LoginScreen},
        Home: { screen: Drawer },
        Details: { screen: RecipeDetailsScreen },
        Category: { screen: CategoryScreen }
    

    },
    {
        headerMode: "none",
        cardStyle: { backgroundColor: "#f4f6f6"},
        //initialRouteName: "LoginScreen"
    
    }
);

const App = createAppContainer(AppNavigator);

export default App;