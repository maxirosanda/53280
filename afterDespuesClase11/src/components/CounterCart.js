import { StyleSheet, View, Button,Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'

const CounterCart = ({item}) => {

    const dispatch = useDispatch()

  return (
    <View style={styles.counterContainer}>
        <Button title='+' onPress={()=> dispatch(addCartItem({...item,quantity:1})) }/>
        <Text style={styles.text}>{item.quantity}</Text>
        <Button title='-'  onPress={ ()=> dispatch(addCartItem({...item,quantity:-1})) }/>   
    </View>
  )
}

export default CounterCart

const styles = StyleSheet.create({
    counterContainer:{
        width:100,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        margin:10
      },
      text:{
        width:50,
        textAlign:"center"
      }
})