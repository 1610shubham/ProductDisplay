import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {fetchProductDetails} from './API/providedAPI';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ProductDetails = props => {
  const {navigation} = props;
  const {id} = props.route.params;
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const windowWidth = Dimensions.get('window').width;
  const imageWidth = windowWidth * 0.5;
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetchProductDetails(id);
        setProductDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getProductDetails();
  }, [id]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          onPress={() => navigation.goBack()}
          name="arrowleft"
          size={24}
          color="gray"
        />
        <Text style={styles.title}>Product Details</Text>
      </View>

      <View style={styles.content}>
        {productDetails ? (
          <>
            <View style={styles.imageContainer}>
              <Image
                style={[styles.image, {width: imageWidth, height: imageWidth}]}
                source={{uri: productDetails.thumbnail}}
              />
            </View>

            <View style={styles.detailsContainer}>
              <View style={styles.detail}>
                <Text style={styles.details}>
                  Product Name: {productDetails.title}
                </Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.details}>
                  Brand: {productDetails.brand}
                </Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.details}>
                  Category: {productDetails.category}
                </Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.details}>
                  Description: {productDetails.description}
                </Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.details}>
                  Rating: {productDetails.rating}
                </Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.details}>
                  Price: {productDetails.price} ₹
                </Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.details}>
                  Discount : {productDetails.discountPercentage} %
                </Text>
              </View>
            </View>
          </>
        ) : (
          <Text style={styles.error}>Product details not available</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',

  },
  title: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '600',
    left: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 100,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  detail: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical:10,
    borderColor: 'gray',
    justifyContent: 'center',
  },
  details: {
    fontSize: 14,
    fontWeight: 300,
    color: '#333',
  },
  error: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ProductDetails;
