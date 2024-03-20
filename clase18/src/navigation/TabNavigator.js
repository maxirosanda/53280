import { StyleSheet,View,Image ,Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import TabBarIcon from '../components/TabBarIcon';
import colors from '../utils/globals/colors'
import ProfileStack from './ProfileStack'
import { useGetImageQuery } from '../app/services/profile'
import { useSelector } from 'react-redux'
const Tab = createBottomTabNavigator()

    

const TabNavigator = () => {
    const localId = useSelector(state => state.auth.localId)
    const {data} = useGetImageQuery(localId)
    
  return (
    <Tab.Navigator
                initialRouteName='ShopStack'
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarStyle: styles.tabBar


                }}
        >
            <Tab.Screen 
                name='ShopStack'
                component={ShopStack}
                options={{
                    tabBarIcon: ({focused}) => 
                    <TabBarIcon title="Productos" nameIcon="home" focused={focused}/>
                }}
            />
            <Tab.Screen 
                    name='CartStack' 
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused}) => 
                        <TabBarIcon title="Carrito" nameIcon="shopping-cart" focused={focused}/>
                    }}

            />
            <Tab.Screen 
                    name='OrdersStack' 
                    component={OrdersStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon title="Ordenes" nameIcon="list" focused={focused}/>
                    }}
            />
             <Tab.Screen 
                    name='ProfileStack' 
                    component={ProfileStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                        if(data){
                            return  <View>
                                    <Image
                                        source={{uri:data.image}}
                                        style={styles.image}
                                        resizeMode='cover' />
                                    <Text>Perfil</Text>
                                    </View>
                        }
                        return  <TabBarIcon title="Perfil" nameIcon="user" focused={focused}/>
                    }
                    }}
            />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.green3,
        height:80,
        position:"absolute",
        left:20,
        right:20,
        bottom:25,
        borderRadius:15,
        elevation:4,
        /*Shadow IOS*/
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62, 
    },
    image:{
        width:25,
        height:25
    },
})