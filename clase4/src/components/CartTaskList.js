import { StyleSheet, Text, View,Switch} from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import fonts from '../utils/globals/fonts'

const CartTaskList = ({item,onHandlerModaDelete,screenWidth,updateTaskCompleted,handlerTaskUpdateSelected}) => {

  return (
            <View style={[styles.taskCard,{width:screenWidth -40,}]}>
                <Text style={styles.text}>Creacion: {item.createAt}</Text>
                <Text style={styles.text}>Actuliazacion: {item.updateAt}</Text>
                <Text style={styles.text}>Titulo: {item.title}</Text>
                <Text style={styles.text}>Descripcion: {item.description}</Text>
                <View style={styles.completedContanier}>
                    <Switch
                        value={item.completed}
                        onValueChange={() => updateTaskCompleted(item.id)}
                    />
                    <Text style={styles.textCompleted}>{item.completed ? "Completada" : "Pendiente" }</Text>
                </View>
                <ButtonPrimary title='Borrar' onPress={() => onHandlerModaDelete(item)} />
                <ButtonPrimary title='Actualizar' onPress={() => handlerTaskUpdateSelected(item)} />
            </View>
  )
}

export default CartTaskList

const styles = StyleSheet.create({
    taskCard:{
        backgroundColor:"#872FF5",
        padding:20,
        marginHorizontal:10,
        marginVertical:10,
        alignItems:"flex-start",
        borderRadius:5,
        gap:25
      },
      text:{
        width:"100%",
        color:"white",
        fontSize:18,
        fontFamily:fonts.ProtestGuerrillaRegular
      },
      completedContanier:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        gap:15
    },
    textCompleted:{
        color:"white",
        fontSize:16,
        fontWeight:"bold"
    }
})