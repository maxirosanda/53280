import { StyleSheet,View,SafeAreaView ,useWindowDimensions} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Home from './src/screens/Home'
import { useEffect, useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import ProductDetail from './src/screens/ProductDetail'
import colors from './src/utils/globals/colors'




const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)
  const [categorySelected,setCategorySelected] = useState("")
  const [productId,setProductId] = useState(0)
  const {width,height} = useWindowDimensions()
  const [portrait,setPortrait] = useState(true)

  useEffect(()=>{
    if(width > height) setPortrait(false) 
    else setPortrait(true)
  },[width,height])

  if(!fontsLoaded) return null

  const selectedCategoryState = (category) => {
    setCategorySelected(category)

  }
  const selectedProductId = (id) => {
    setProductId(id)
  }

  return (
    <>
      <StatusBar backgroundColor={colors.green1} />
      <SafeAreaView style={styles.container}>
        {categorySelected ?
                  productId ?
                    <ProductDetail 
                      productId={productId}
                      portrait={portrait}
                       />
                    : 
                    <ProductsByCategory 
                      selectedProductId={selectedProductId} 
                      categorySelected={categorySelected}/>
                  :
                  <Home selectedCategoryState={selectedCategoryState}/>
                  
        }
      </SafeAreaView>
    </>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})