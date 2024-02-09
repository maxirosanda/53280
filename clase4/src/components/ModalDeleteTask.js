import { StyleSheet, Text, View ,Modal,Button } from 'react-native'
import ButtonPrimary from './ButtonPrimary'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ModalDeleteTask = ({taskSelected,
                          deleteTask,
                          onHandlerModaDelete,
                          modalVisible}) => {

    return (
        <Modal
        visible={modalVisible}
        transparent={true}
        animationType='fade'
        onRequestClose={()=> onHandlerModaDelete({})}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>Esta seguro que quiero eliminar la tarea :{taskSelected.title}</Text>
                    <ButtonPrimary title='si' onPress={deleteTask}/>
                    <ButtonPrimary title='no' onPress={()=> onHandlerModaDelete({})}/>
                </View>

            </View>
        </Modal>
  )
}

export default ModalDeleteTask

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(0,0,0,0.8)",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    content:{
        width:"90%",
        backgroundColor:colors.primary,
        padding:30,
        gap:20,
        borderRadius:5
    },
    text:{
        fontSize:16,
        color:"white",
        fontFamily:fonts.ProtestGuerrillaRegular
    }

})