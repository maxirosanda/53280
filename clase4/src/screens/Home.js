import { StyleSheet, Text, View } from 'react-native'
import ModalDeleteTask from '../components/ModalDeleteTask'
import AddTask from '../components/AddTask'
import ListTasks from '../components/ListTasks'

const Home = ({
    tasks,
    taskTitle,
    taskDescripcion,
    onHandlerTitle,
    onHandlerDescription,
    addTask,
    onHandlerModaDelete,
    screenWidth,
    updateTaskCompleted,
    handlerTaskUpdateSelected,
    modalVisible,
    taskSelected,
    deleteTask
}) => {
  return (
    <>
        <AddTask 
            taskTitle= {taskTitle}
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
          handlerTaskUpdateSelected={handlerTaskUpdateSelected}
        />
        <ModalDeleteTask  
          modalVisible={modalVisible}
          taskSelected={taskSelected}
          deleteTask={deleteTask}
          onHandlerModaDelete={onHandlerModaDelete}
        />
    </>
  )
}

export default Home

const styles = StyleSheet.create({})