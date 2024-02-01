import { StyleSheet, Text, View,FlatList } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = () => {
    
  return (
    <View>
        <Header title="Home"/>
        <Categories/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})