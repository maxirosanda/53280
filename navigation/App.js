import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Detalle' onPress={()=>navigation.navigate("Details",{id:1,category:"jgoasgj"})} />
    </View>
  )
}

const Details = ({navigation,route}) => {

  const {id} = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen {id}</Text>
      <Button title='volver' onPress={()=>navigation.goBack()}/>
    </View>
  )
}

const Header = ({title}) => {
  return (
    <View style={{width:"100%",height:80,backgroundColor:"#7E45D9",alignItems:"center",justifyContent:"center"}}>
      <Text style={{color:"white",fontSize:20}}>{title}</Text>
    </View>
  )
}

const  App = () => {
  return (
    <>
    <StatusBar style='light' />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={({route})=>{
          return {
            header: () =>{
              return <Header title={route.name === "Home" ? "Bienvenido":
                                    route.name === "Details" ? route.params.category:
                                    "Otra pantalla"
            }/>
            }
          }
        }}
        >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
