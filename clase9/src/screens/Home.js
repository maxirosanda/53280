import { StyleSheet, Text, View,FlatList } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = ({navigation}) => {
    
  return (
    <>
        <Categories navigation={navigation} />
    </>
  )
}

export default Home

const styles = StyleSheet.create({})