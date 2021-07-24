import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ProductCard from '../../global/Components/Card/ProductCard'
import { DataManger } from '../../global/Context/Context'

const HomeScreen = () => {

    const {products} = useContext(DataManger)
    console.warn(products)
    return (
        <View>
            <Text>Home Screen</Text>
             
            <FlatList
             numColumns={2}
            data={products}
            renderItem={({item})=><ProductCard item={item} />}
            
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
