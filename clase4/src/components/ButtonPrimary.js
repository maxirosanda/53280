import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonPrimary = ({title,onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:"100%",
        paddingHorizontal:10,
        paddingVertical:5,
        alignItems:"center",
        borderRadius:5
    },
    text:{
        fontSize:16
    }
})