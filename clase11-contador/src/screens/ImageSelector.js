import {useEffect, useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import AddButton from '../components/AddButton'
import * as ImagePicker from 'expo-image-picker'
import { useGetImageQuery, usePutImageMutation } from '../app/services/profile'
import { useSelector } from 'react-redux'


const ImageSelector = ({navigation}) => {

    const [image,setImage] = useState("")
    const [triggerImage] = usePutImageMutation()
    const localId = useSelector((state)=>state.auth.localId)
    const {data,isSuccess} = useGetImageQuery(localId)

    useEffect(()=>{
        if(isSuccess && data) setImage(data.image)
    },[isSuccess,data])

    const pickImage = async () => {

       const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        
       if(granted){
         let result = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[6,4],
            quality:0.3,
            base64:true
         })

         if(!result.canceled){
            setImage('data:image/jpeg;base64,' + result.assets[0].base64)
         }
       }


    }

    const confirmImage = () => {
        triggerImage({image,localId})
        navigation.goBack()
    }


  return (
    <View style={styles.container}>
       <Image
            source={image ? {uri:image}: require("../../assets/user.png")}
            style={styles.image}
            resizeMode='cover'

        />
        <AddButton title="Tomar foto" onPress={pickImage} />
        <AddButton title="Confirm photo" onPress={confirmImage} />
    </View>
  )
}


export default ImageSelector


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200
    }
})
