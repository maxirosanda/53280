import { Pressable, StyleSheet, Text, View,ImageBackground} from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const CardCategory = ({item,navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("ProductsByCategory",{categorySelected:item.title})}>
      <ShadowPrimary style={styles.container}>
          <ImageBackground source={{uri:item.thumbnail}} style={styles.background}>
            <Text style={styles.text}>{item.title}</Text>
          </ImageBackground>
      </ShadowPrimary>
    </Pressable>
  )
}

export default CardCategory

const styles = StyleSheet.create({
    container:{
        width:150,
        height:100,
        backgroundColor:colors.green2,
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:5,
        overflow:"hidden"
    },
    background:{
      width:"100%",
      height:"100%",
      resizeMode:"cover",
      alignItems:"center",
      justifyContent:"center"
    },
    text:{
        fontSize:16,
        fontFamily:fonts.JosefinSansBold,
        color:"white"
    }
})