import { useState } from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import ButtonPrimary from '../components/ButtonPrimary'

const Update = ({taskUpdateSelected,updateTask,goBack}) => {

    const [title,setTitle] = useState(taskUpdateSelected.title)

    const handlerTitle = (t) => {
        setTitle(t)
    }
  return (
    <View>
      <TextInput 
        placeholder='Nuevo Titulo'
        value={title}
        onChangeText={handlerTitle}
        
      />
      <ButtonPrimary title="actualizar" onPress={()=> updateTask({...taskUpdateSelected,...{title}})}/>
      <ButtonPrimary title="Volver" onPress={goBack}/>
    </View>
  )
}

export default Update

const styles = StyleSheet.create({})