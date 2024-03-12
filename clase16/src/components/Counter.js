import { StyleSheet, Text, View ,Button,TextInput } from 'react-native'
import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmount } from '../features/counter/counterSlice'

const Counter = () => {

    const dispatch = useDispatch()
    const count = useSelector((state)=> state.counter.value)
    const [number,setNumber] = useState(0)

  return (
    <View style={styles.counterContainer}>
        <Button title='Aumentar' onPress={()=> dispatch(increment()) }/>
        <Text>{count}</Text>
        <Button title='Disminuir'  onPress={ ()=> dispatch(decrement())  }/>
        <TextInput style={styles.input} onChangeText={ (t) => setNumber(parseInt(t)) }/>
        <Button title='monto' onPress={ ()=> dispatch(incrementByAmount(number)) } />
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    counterContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        margin:10
      },
      input:{
        borderWidth:2,
        width:50,
      }
})