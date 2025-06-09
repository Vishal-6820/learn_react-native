import {
  View,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import React from 'react';
import {products} from '../constatnt/product';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from '../redux/action/Action';
type Props = NativeStackScreenProps<RootStackParamList, 'Explore'>;

const ProductListing = (props: Props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart);
  console.log('Cart items:', cartItems);
  const onAddToCart = (item: any) => {
    console.log('Adding item to cart:' + JSON.stringify(item));
    dispatch(addItemToCart(item));
  };

  return (
    <>
      <View style={{backgroundColor: 'white', height: 40}}>
        <StatusBar
          barStyle="dark-content" // or 'light-content' depending on background
          backgroundColor="#fff" // Match your app background
        />
      </View>
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <View
            style={{
              width: '100%',
              height: 70,
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 24, marginLeft: 20, fontWeight: '800'}}>
              Products
            </Text>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                backgroundColor: 'white',
              }}
              onPress={() => {
                console.log('Cart pressed');
                props.navigation.navigate('Cart');
              }}>
              <Image
                source={require('../assets/images/cart.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={products.category.flatMap(c => c.data)} // 👈 Flatten all products
            keyExtractor={(item, index) => index.toString()}
            // data={products}
            // style={{flex: 1}}
            numColumns={2}
            renderItem={({item, index}) => {
              // console.log('item', item);
              return (
                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    elevation: 5,
                    width: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                    backgroundColor: '#fff',
                    marginBottom: 10,
                  }}>
                  <View style={{width: '100%'}}>
                    <Image
                      source={item.image}
                      style={{
                        width: '100%',
                        height: 120,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      }}
                    />

                    <Text
                      style={{
                        marginTop: 10,
                        marginLeft: 10,
                        fontSize: 18,
                        fontWeight: '600',
                      }}>
                      {item.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10,
                      }}>
                      <Text
                        style={{
                          marginTop: 5,
                          marginLeft: 10,
                          fontSize: 18,
                          fontWeight: '600',
                          marginBottom: 10,
                        }}>
                        {'रु ' + item.price}
                      </Text>
                      <TouchableOpacity
                        style={{
                          borderWidth: 0.5,
                          padding: 5,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 10,
                          marginRight: 15,
                        }}
                        onPress={() => {
                          onAddToCart(item);
                        }}>
                        <Text style={{color: '#000'}}>Add to Cart</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={{
                        width: 40,
                        elevation: 5,
                        height: 40,
                        backgroundColor: '#fff',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 10,
                        right: 10,
                      }}
                      onPress={() => {
                        // onAddWishlist(item);
                      }}>
                      <Image
                        source={require('../assets/images/heart.png')}
                        style={{width: 24, height: 24}}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default ProductListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productCard: {
    borderRadius: 20,
    elevation: 5,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});
