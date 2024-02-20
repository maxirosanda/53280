import { StyleSheet,FlatList } from 'react-native'
import orders from '../utils/data/orders.json'
import OrderItem from '../components/OrderItem'

const Orders = () => {
  return (
    <FlatList
    data={orders}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=> <OrderItem order={item}/>}
    />
  )
}

export default Orders

const styles = StyleSheet.create({})