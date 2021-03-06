import React  from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
 import Slider from './Slider';
import Category from './Category';
 

const Header = ({data}) => {
  const {category, brand , slider} = data;
  return (
    <View>
      {slider.length>0 &&  <Slider slider={slider} />}
      {brand.length>0 &&  
      
      <SectionList
        sections={[
          {title: 'Categories', data: [category]},
          {title: 'brands', data: [brand]},
          {title: 'All Products', data: []},
        ]}
        keyExtractor={(item, index) => item + index}
        renderItem={(item) => <Category   data={item}    />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 13,
    marginHorizontal:15
  },
});
