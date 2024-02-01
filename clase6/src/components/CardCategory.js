import { StyleSheet, Text, View } from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/globals/colors'

const CardCategory = ({item}) => {
  return (
    <ShadowPrimary style={styles.container}>
        <Text style={styles.text}>{item}</Text>
    </ShadowPrimary>
  )
}

export default CardCategory

const styles = StyleSheet.create({
    container:{
        width:"80%",
        backgroundColor:colors.green2,
        marginHorizontal:"10%",
        marginVertical:10,
        padding:20,
        alignItems:"center",
        borderRadius:5
    },
    text:{
        fontSize:16
    }
})