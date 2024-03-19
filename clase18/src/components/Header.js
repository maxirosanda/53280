import { View , Text ,StyleSheet,Platform ,StatusBar, Pressable } from "react-native"
import colors from "../utils/globals/colors"
import {AntDesign} from "@expo/vector-icons"
import { useDispatch, useSelector } from "react-redux"
import { clearUser } from "../features/auth/authSlice"
import { deleteSession } from "../utils/db"

const Header = ({title="Ecommerce",navigation}) => {

    const dispatch = useDispatch()
    const idToken = useSelector((state) => state.auth.idToken)

    const onLogout = () => {
        dispatch(clearUser())
        deleteSession()
    }

    return  <View style={styles.container}>
                {navigation.canGoBack() && 
                <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" size={25} color="black"/>
                </Pressable>}
                <Text style={styles.text}>{title}</Text>
                {idToken && (
                    <Pressable style={styles.logoutIcon} onPress={onLogout}>
                     <AntDesign name="logout" size={30} color="black"/>
                    </Pressable>)}
            </View>
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.green1,
        height:80,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
    },
    text:{
        fontSize:30
    },
    goBack:{
        position:"absolute",
        left:10,
        bottom:15

    },
    logoutIcon:{
        position:"absolute",
        right:10,
        bottom:15
    }
})

