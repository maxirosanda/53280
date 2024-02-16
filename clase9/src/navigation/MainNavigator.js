import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Home from '../screens/Home'
import ProductDetail from '../screens/ProductDetail'
import ProductsByCategory from '../screens/ProductsByCategory'

const Stack = createNativeStackNavigator()


const MainNavigator = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={({route,navigation})=>{
                    return {
                    header: () =>{
                        return <Header 
                                    navigation={navigation}
                                    title={route.name === "Home" ? "Categorias":
                                            route.name ==="ProductsByCategory" ? route.params.categorySelected:
                                            "Detalle"
                    }/>
                    }
                    }
                }}
            >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
