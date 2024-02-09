import { StyleSheet, TextInput, View } from 'react-native'
import ButtonPrimary from './ButtonPrimary'
import fonts from '../utils/globals/fonts'

const AddTask = ({taskTitle,
                  onHandlerTitle,
                  taskDescripcion,
                  onHandlerDescription,
                  addTask}) => {
  return (
    <View style={styles.container}>
        <TextInput 
            value={taskTitle} 
            onChangeText={onHandlerTitle}  
            placeholder='Ingresar titulo' 
            placeholderTextColor="white"
            maxLength={25}
            style={styles.input}
            />
        <TextInput 
            value={taskDescripcion} 
            onChangeText={onHandlerDescription}  
            placeholder='Ingresar descripcion' 
            placeholderTextColor="white"
            multiline
            numberOfLines={4}
            maxLength={100}
            style={styles.input}/>
        <ButtonPrimary title="Agregar Tarea" onPress={addTask}/>
    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#872FF5",
        alignItems:"center",
        justifyContent:"space-around",
        padding:10
      },
      input:{
        width:"100%",
        borderWidth:2,
        borderColor:"white",
        marginHorizontal:10,
        marginVertical:5,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5,
        color:"white",
        fontSize:16,
        textAlignVertical:"top",
        fontFamily:fonts.ProtestGuerrillaRegular
        
      }

})