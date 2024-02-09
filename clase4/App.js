import { useState } from 'react'
import {View,StyleSheet ,Dimensions ,Keyboard,SafeAreaView,Text} from 'react-native'
import uuid from 'react-native-uuid'

import {useFonts} from 'expo-font'
import { fontsCollection } from './src/utils/globals/fonts'
import { StatusBar } from 'expo-status-bar'
import colors from './src/utils/globals/colors'
import Home from './src/screens/Home'
import Update from './src/screens/Update'

const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [taskSelected , setTaskSelected] = useState({})
  const [taskTitle,setTaskTitle] = useState("")
  const [taskDescripcion,setTaskDescription] = useState("")
  const [tasks,setTasks] = useState([])
  const [taskUpdateSelected,setTaskUpdateSelected] = useState({})
  const screenWidth = Dimensions.get('window').width
  const [fontsLoaded] = useFonts(fontsCollection)

  if (!fontsLoaded) {
    return null
  }

  const addTask = () =>{

    const newTask = {
      id: uuid.v4(),
      createAt: new Date().toLocaleString(),
      updateAt: new Date().toLocaleString(),
      completed:false,
      title:taskTitle,
      description:taskDescripcion
    }

    setTasks([...tasks,newTask])
    setTaskTitle("")
    setTaskDescription("")
    Keyboard.dismiss()
  }

  const updateTask = (taskSelected) => {
    setTasks(tasks.map(task => {

      if(task.id === taskSelected.id){
        return taskSelected
      }
      return task
    }))
    setTaskUpdateSelected({})
  }

  const onHandlerTitle = (t) =>{
    setTaskTitle(t)
  }

  const onHandlerDescription = (t) => {
    setTaskDescription(t)
  }

  const onHandlerModaDelete = (task) => {
    setTaskSelected(task)
    setModalVisible(!modalVisible)
  }
  const handlerTaskUpdateSelected = (task) => {
    setTaskUpdateSelected(task)
  }

  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id != taskSelected.id ))
    setModalVisible(!modalVisible)
  }

  const updateTaskCompleted = (id) => {
    setTasks(tasks.map(task =>{
      if(task.id === id) return {...task,...{completed:!task.completed}}
      return task
    }))
  }
  const goBack = () => {
    setTaskUpdateSelected({})
  }

  return( 
    <>
      <StatusBar backgroundColor={colors.primary} style='light'/>
      <SafeAreaView style={styles.container} >
        {taskUpdateSelected.title ?
          <Update
            taskUpdateSelected={taskUpdateSelected}
            updateTask={updateTask}
            goBack={goBack}
            
          />
        :
          <Home
          tasks={tasks}
          taskTitle ={taskTitle}
          taskDescripcion={taskDescripcion}
          onHandlerTitle = {onHandlerTitle}
          onHandlerDescription = { onHandlerDescription}
          addTask={addTask}
          onHandlerModaDelete = {onHandlerModaDelete}
          screenWidth={screenWidth}
          updateTaskCompleted={updateTaskCompleted}
          handlerTaskUpdateSelected={handlerTaskUpdateSelected}
          modalVisible={modalVisible}
          taskSelected={taskSelected}
          deleteTask={deleteTask}
    />
        }
       
      </SafeAreaView>
  </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#F2E4F6",
    flex:1,
    paddingTop:30
  },


})