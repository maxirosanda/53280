import { StyleSheet,FlatList } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../app/services/orders'

const Orders = () => {

  const localId = useSelector((state) => state.auth.localId)
  const {data:orders} = useGetOrdersQuery(localId)

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