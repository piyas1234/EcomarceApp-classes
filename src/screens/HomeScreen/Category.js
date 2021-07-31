import React from 'react'
import { FlatList , View } from 'react-native'
import CategoryCard from '../../global/Components/Card/CategoryCard'



const Category = ({ data }) => {
     
    return (
        <View>
            <FlatList 
            numColumns={4}
            data={data.item}
            renderItem={({item})=><CategoryCard type={data.section.title} item={item} />}
            keyExtractor={(item)=>item._id}
            />
        </View>
    )
}

export default Category

 
