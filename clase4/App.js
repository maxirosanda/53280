import { useState } from 'react'
import {View,StyleSheet ,Dimensions} from 'react-native'
import uuid from 'react-native-uuid'
import ModalDeleteTask from './src/components/ModalDeleteTask'
import AddTask from './src/components/AddTask'
import ListTasks from './src/components/ListTasks'

const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [taskSelected , setTaskSelected] = useState({})
  const [taskTitle,setTaskTitle] = useState("")
  const [taskDescripcion,setTaskDescription] = useState("")
  const [tasks,setTasks] = useState([])
  const screenWidth = Dimensions.get('window').width
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

  return( 
    <View style={styles.container} >
      <AddTask taskTitle= {taskTitle}
               onHandlerTitle= {onHandlerTitle}
               taskDescripcion = {taskDescripcion}
               onHandlerDescription = {onHandlerDescription}
               addTask = {addTask}
      />
      <ListTasks 
        tasks={tasks} 
        onHandlerModaDelete={onHandlerModaDelete}
        screenWidth={screenWidth}
        updateTaskCompleted={updateTaskCompleted}
      />
      <ModalDeleteTask  
         modalVisible={modalVisible}
         taskSelected={taskSelected}
         deleteTask={deleteTask}
         onHandlerModaDelete={onHandlerModaDelete}
      />
  </View>
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