import { StatusBar } from 'expo-status-bar'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import MainNavigator from './src/navigation/MainNavigator'
import colors from './src/utils/globals/colors'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { init } from './src/utils/db'

init()

const App = () => {

  const [fontsLoaded] = useFonts(fontCollection)

  if(!fontsLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.green1} />
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    </>
    
  )
}

export default App
