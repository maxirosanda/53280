import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React from 'react'
import CartTaskList from './CartTaskList'

const ListTasks = ({tasks,onHandlerModaDelete,screenWidth,updateTaskCompleted,handlerTaskUpdateSelected}) => {

  return (
    <View style={styles.tasksContainer}>
        {tasks.length === 0 ?
          <View>
            <Text>No hay tareas</Text>
          </View>
        :
        <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item})=>(<CartTaskList 
                                    item={item} 
                                    onHandlerModaDelete={onHandlerModaDelete}
                                    screenWidth={screenWidth}
                                    updateTaskCompleted={updateTaskCompleted}
                                    handlerTaskUpdateSelected={handlerTaskUpdateSelected}
                                    />)}
        />
        }

  
    </View>
  )
}

export default ListTasks

const styles = StyleSheet.create({
    tasksContainer:{
        padding:10
      }
})