import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Home from '../screens/Home'
import ProductsByCategory from '../screens/ProductsByCategory'
import ProductDetail from '../screens/ProductDetail'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
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
  )
}

export default ShopStack