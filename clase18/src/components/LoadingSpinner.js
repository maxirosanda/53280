import { StyleSheet } from 'react-native'
import { View, ActivityIndicator } from 'react-native'
import colors from '../utils/globals/colors'


const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color="white" />
    </View>
  )
}

export default LoadingSpinner

const styles = StyleSheet.create({
  container:{ 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:colors.green1}
})