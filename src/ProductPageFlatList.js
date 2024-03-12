import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

const ProductPageFlatList = props => {
  const {navigation} = props;
  console.log(props.data.item.id, 'props');
  const imageURL = props.data.item.thumbnail;
  const windowWidth = Dimensions.get('window').width;
  const imageWidth = windowWidth * 0.3;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: 10, paddingVertical: 10}}>
        <Pressable
          onPress={() => {
            console.log('data');
            navigation.navigate('ProductDetails', {id: props.data.item.id});
          }}
          style={{
            height: 190,
            backgroundColor: 'white',
            borderRadius: 15,
            shadowColor: 'gray',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 1,
            shadowRadius: 8,
            elevation: 8,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 10,
              //   backgroundColor:'red'
            }}>
            <View
              style={{
                marginStart: 8,
                marginVertical: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: imageWidth,
                  height: imageWidth,
                  borderRadius: imageWidth / 2,
                  resizeMode: 'cover',
                }}
                source={{uri: imageURL}}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                marginStart: 8,
                marginVertical: 4,
              }}>
              <View style={styles.textContainer}>
                <Text style={{color:'#333333'}}>{props.data.item.title}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={{color:'gray'}}>{props.data.item.brand}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={{color:'#666666'}}>{props.data.item.category}</Text>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 10,
                paddingVertical: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',}}>
            <View
              style={{
                // paddingHorizontal: 10,
                // paddingVertical: 10,
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
              <View>
                <Text style={{color:'#000'}}>Price : {props.data.item.price} ₹</Text>
              </View>
              <View>
                <Text style={{color:'#28a745'}}>
                  Discount : {props.data.item.discountPercentage}%
                </Text>
              </View>
            </View>
            <View>
              <Text style={{color:'#FFA500'}}>Rating : {props.data.item.rating}</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  textContainer: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    marginBottom: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E1EEDD',
    width: '100%',
    alignItems: 'center',
  },
};

export default ProductPageFlatList;
