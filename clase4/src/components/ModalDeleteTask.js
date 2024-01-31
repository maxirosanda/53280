import { StyleSheet, Text, View ,Modal,Button } from 'react-native'

const ModalDeleteTask = ({taskSelected,
                          deleteTask,
                          onHandlerModaDelete,
                          modalVisible}) => {

    return (
        <Modal
        visible={modalVisible}
        animationType='fade'
        onRequestClose={()=> onHandlerModaDelete({})}
        >
            <View>
            <Text>Esta seguro que quiero eliminar la tarea :{taskSelected.title}</Text>
            <Button title='si' onPress={deleteTask}/>
            <Button title='no' onPress={()=> onHandlerModaDelete({})}/>
            </View>
        </Modal>
  )
}

export default ModalDeleteTask

const styles = StyleSheet.create({


})