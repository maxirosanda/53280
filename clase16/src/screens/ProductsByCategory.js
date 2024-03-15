import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'
import { useGetProductsByCategoryQuery } from '../app/services/shop'
import LoadingSpinner from '../components/LoadingSpinner'
import Error from '../components/Error'
import EmptyListComponent from '../components/EmptyListComponent'

const ProductsByCategory = ({navigation,route}) => {

  const {categorySelected} = route.params
  const {data:products,isError,isLoading,isSuccess,error} = useGetProductsByCategoryQuery(categorySelected)
  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  useEffect(()=>{
    setProductsFiltered(products)
    if(keyword) setProductsFiltered(products.filter(product => {
     const productTitleLower = product.title.toLowerCase()
     const keywordLower = keyword.toLowerCase()
     return productTitleLower.includes(keywordLower)
   }))
   },[categorySelected,keyword,products])

  if(isLoading) return <LoadingSpinner/>
  if(isError) return <Error message="¡Ups! Algo salió mal." textButton="Volver" onRetry={()=>navigation.goBack()}/>
  if(isSuccess && products.length === 0) return <EmptyListComponent message="No hay productos de esta categoria"/>

  const handlerKeyword = (k) => {
    setKeyword(k)
  }




  return (
    <>
        <Search handlerKeyword={handlerKeyword}/>
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item})=> <ProductByCategory navigation={navigation}  item={item}/>}
        />
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})