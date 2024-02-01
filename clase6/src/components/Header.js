import { View , Text ,StyleSheet } from "react-native"
import colors from "../utils/globals/colors"

const Header = ({title="Ecommerce"}) => {

    return  <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.green1,
        height:80,
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:30
    }
})

