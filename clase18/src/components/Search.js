import { Pressable, StyleSheet, Text, TextInput, View,Keyboard } from 'react-native'
import {AntDesign} from "@expo/vector-icons"
import colors from '../utils/globals/colors'
import { useState } from 'react'

const Search = ({handlerKeyword}) => {
    const [input,setInput] = useState("")
    const [error,setError] = useState("")
    const handlerInput = (t)=> setInput(t)

    const search = () => {

        const expression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if(expression.test(input)){
            setError("Caracteres no validos")
            return
        }
        setError("")
        handlerKeyword(input)
        Keyboard.dismiss()
    }

    const resetSearch = () => {
        handlerKeyword("")
        handlerInput("")
        setError("")

    }

  return (
    <View>
        <View style={styles.container}>
        <TextInput
            placeholder='Buscar'
            value={input}
            onChangeText={handlerInput}
            style={styles.input}
        />
        <Pressable onPress={search}>
            <AntDesign name='search1' size={30} color="black"/>
        </Pressable>
        <Pressable onPress={resetSearch}>
            <AntDesign name='closecircle' size={30} color="black"/>
        </Pressable>
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.green1,
        flexDirection:"row",
        padding:10,
        alignItems:"center"
    },
    input:{
        flex:1,
        borderWidth:2,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5
    },
    errorText:{
        color:"red",
        paddingHorizontal:10
      }

})