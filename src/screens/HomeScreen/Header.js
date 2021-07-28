import React, {useContext} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
 import Slider from './Slider';
import Category from './Category';
import {DataManger} from '../../global/Context/Context';

const Header = () => {
  const {category, brand} = useContext(DataManger);
  return (
    <View>
      <Slider />
      <SectionList
        sections={[
          {title: 'Categories', data: [category]},
          {title: 'brands', data: [brand]},
        ]}
        keyExtractor={(item, index) => item + index}
        renderItem={(item) => <Category data={item}    />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
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
