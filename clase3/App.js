import {View ,Text, TextInput, Button ,StyleSheet} from 'react-native'

const App = () => {

  return (
    <View style={styles.container} >
      <View style={styles.inputContainer}>
        <TextInput placeholder='Ingresar tarea' style={styles.input}/>
        <Button color="#3921F5" title='ADD' />
      </View>
      <View style={styles.tasksContainer}>
        <View style={styles.taskCard}>
          <Text style={styles.text}>Tarea 1</Text>
          <Button title='DEL'/>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.text}>Tarea 2</Text>
          <Button title='DEL'/>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.text}>Tarea 3</Text>
          <Button title='DEL'/>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.text}>Tarea 4</Text>
          <Button title='DEL'/>
        </View>
       
        
      </View>
     { /*<View style={styles.boxContainer}>
        <View style={styles.box}>
            <Text style={styles.text}>box 1</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.text}>box 2</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.text}>box 3</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.text}>box 1</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.text}>box 2</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.text}>box 3</Text>
        </View>
      </View>*/}
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
    flexDirection:"row",
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
    alignItems:"center",
    gap:25,
    padding:10
  },
  taskCard:{
    flexDirection:"row",
    backgroundColor:"#872FF5",
    padding:20,
    alignItems:"center",
    borderRadius:5
  },
  text:{
    width:"70%",
    color:"white",
    fontSize:16
  },
  /*boxContainer:{
    backgroundColor:"#F5462F",
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    flexWrap:"wrap"
  },
  box:{
    backgroundColor:"#3921F5",
    alignItems:"center",
    justifyContent:"center",
    width:80,
    height:100,
    margin:10,
    padding:10
  },
  text:{
    color:"white",
    fontSize:16
  }*/
})