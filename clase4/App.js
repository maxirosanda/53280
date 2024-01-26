import { useState } from 'react'
import {View ,Text, TextInput, Button ,StyleSheet, ScrollView, FlatList, Modal} from 'react-native'
import uuid from 'react-native-uuid'

const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [idSelected , setIdSelected] = useState("")
  const [newTask,setNewTask] = useState({
    title:"",
    description:"",
    id:""
  })
  const [tasks,setTasks] = useState([])

  const addTask = () =>{
    setTasks([...tasks,newTask])
    
    setNewTask({
      title:"",
      description:"",
      id:""
    })
  }

  const onHandlerTitle = (t) =>{
    const id = uuid.v4()
    setNewTask({...newTask,title:t,id})
  }

  const onHandlerDescription = (t) => {
    setNewTask({...newTask,description:t})
  }

  const onHandlerModaDelete = (id) => {
    setIdSelected(id)
    setModalVisible(true)
  }

  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id != idSelected ))
  }

  return (
    <View style={styles.container} >
      <View style={styles.inputContainer}>
        <TextInput value={newTask.title} onChangeText={onHandlerTitle}  placeholder='Ingresar titulo' style={styles.input}/>
        <TextInput value={newTask.description} onChangeText={onHandlerDescription}  placeholder='Ingresar descripcion' style={styles.input}/>
        <Button color="#3921F5" title='ADD' onPress={addTask} />
      </View>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item})=>(
                              <View style={styles.taskCard}>
                                <Text style={styles.text}>{item.title}</Text>
                                <Button title='DEL' onPress={() => onHandlerModaDelete(item.id)} />
                              </View>
          )}
        />
        <Modal
          visible={modalVisible}
        >
          <View>
            <Text>Esta seguro que quiero eliminar</Text>
            <Button title='si' onPress={()=> {
              deleteTask()
              setModalVisible(false)
              }}/>
            <Button title='no' onPress={()=> setModalVisible(false)}/>
          </View>
        </Modal>
      </View>
    { /* <ScrollView style={styles.tasksContainer}>
        {
          tasks.map(task => (<View key={task.id} style={styles.taskCard}>
                              <Text style={styles.text}>{task.title}</Text>
                              <Button title='DEL'/>
                             </View> )
                    )
        }
      </ScrollView>*/}
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
  inputContainer:{
    backgroundColor:"#872FF5",
    alignItems:"center",
    justifyContent:"space-around"
  },
  input:{
    width:250,
    borderBottomWidth:2,
    borderColor:"white",
    margin:10,
    paddingVertical:5,
    paddingHorizontal:10
  },
  tasksContainer:{
    padding:10
  },
  taskCard:{
    flexDirection:"row",
    backgroundColor:"#872FF5",
    padding:20,
    marginVertical:10,
    alignItems:"center",
    borderRadius:5
  },
  text:{
    width:"70%",
    color:"white",
    fontSize:16
  }
})