import { StyleSheet, Text,Pressable } from 'react-native'
import colors from '../utils/globals/colors'


const ButtonPrimary = ({title,onPress,style={}}) => {
  return (
    <Pressable style={[style,styles.container]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}


export default ButtonPrimary


const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.green3,
        paddingHorizontal:10,
        paddingVertical:8,
        margin:10,
        borderRadius:5
    },
    text:{
        color:"white",
        textAlign:"center",
        fontSize:18
    }
})
