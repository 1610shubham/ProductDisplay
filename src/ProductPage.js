import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {fetchProducts} from './API/providedAPI';
import ProductPageFlatList from './ProductPageFlatList';

const renderDevicesItem = (itsemData, props) => {
  console.log(props, itsemData.item.id, 'shubham');
  return (
    <>
      <ProductPageFlatList {...props} data={itsemData} id={itsemData.item.id} />
    </>
  );
};

const ProductPage = props => {
  const [productData, setProductData] = useState('');
  console.log(productData, 'productData');
  const getProductData = async () => {
    try {
      let response = await fetchProducts();
      setProductData(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
        <Text style={{color: 'gray', fontSize: 18,fontWeight:600}}>Product Page</Text>
      </View>
      <FlatList
        data={productData}
        // renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={(item, index) =>
          item && item.id ? item.id.toString() : index.toString()
        }
        renderItem={itemData => renderDevicesItem(itemData, props)}
      />
    </SafeAreaView>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
