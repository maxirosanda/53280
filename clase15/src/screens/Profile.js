import { StyleSheet, Text, View,Image } from 'react-native'
import AddButton from '../components/AddButton'
import { useSelector } from 'react-redux'
import { useGetImageQuery, useGetUserLocationQuery } from '../app/services/profile'

const Profile = ({navigation}) => {
    const localId = useSelector((state)=> state.auth.localId)
    const {data:locationFormatted} = useGetUserLocationQuery(localId)
    const {data} = useGetImageQuery(localId)
  return (
    <View style={styles.container}>
        <Image
            source={data ? {uri:data.image}:require("../../assets/user.png")}
            style={styles.image}
            resizeMode='cover'
        />
        <Text style={styles.text}>{locationFormatted.address}</Text>
        <AddButton title={"Agregar Imagen de perfil"} onPress={()=> navigation.navigate("ImageSelector")}/>
        <AddButton title={"Agregar Direccion"} onPress={()=> navigation.navigate("LocationSelector")}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200
    },
    text:{
        fontSize:16,
        marginVertical:10
    }
})