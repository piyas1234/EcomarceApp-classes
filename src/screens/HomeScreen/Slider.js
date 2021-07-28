import React, { useContext } from 'react';

import { Dimensions, StyleSheet, View} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import { DataManger } from '../../global/Context/Context';
 
const Slider = () => {

  const {slider} = useContext(DataManger)
   

  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        index={2}
        showPagination
        paginationStyleItemActive={{width:20,height:8}}
        paginationStyleItemInactive={{height:8, width:8}}
        paginationActiveColor="red"
        paginationDefaultColor="gold"
        data={slider}
        renderItem={({item}) => (
          <View style={[styles.child, {backgroundColor:'#edebed', paddingHorizontal:10}]}>
            <Image style={{width:'100%', height:200, resizeMode:'contain'}} source={{uri:item.image}} />
          </View>
        )}
      />
    </View>
  );
};

export default Slider;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', height: width * 0.3},
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.2, textAlign: 'center'},
});
