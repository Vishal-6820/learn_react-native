// //FlatList with dummy data and mock API call
// import {StyleSheet, Text, View} from 'react-native';
// import React, {useState, useEffect} from 'react';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import axios from 'axios';
// import DrawerNavigation from '../navigation/DrawerNavigation';
// type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

// export default function Home(Props: Props) {
//   const [limit, setLimit] = useState(10);
//   //   const [skip, setSkip] = useState(0);
//   const [page, setPage] = useState(1);
//   const [total, setTotal] = useState(0);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [loadingMore, setLoadingMore] = useState(false);

//   useEffect(() => {
//     getHomeData();
//   }, []);

//   const getHomeData = async () => {
//     axios
//       .get(
//         `https://dummyjson.com/products?limit=${limit}&skip=${page - 1 * 10}`,
//       )
//       .then(function (response) {
//         // handle success
//         console.log(response);
//         if (response.status == 200) {
//           setProducts(response.data.products);
//           setTotal(response.data.total);
//           setPage(prev => prev + 1);
//           if (page > 1) {
//             setLoadingMore(false);
//           }
//           setLoading(false);
//         } else {
//           console.log('Error in API call');
//         }
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//       .finally(function () {
//         // always executed
//       });
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: 'white',
//       }}>
//       <Text>Home</Text>
//       {/* <DrawerNavigation /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ShimmerEffect from './ShimmerEffect';

export default function Home() {
  const [limit] = useState(10);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    if (loading || loadingMore) return;
    console.log('Get Home Data Called');
    const skip = page * limit;
    setPage(prev => prev + 1);
    page === 0 ? setLoading(true) : setLoadingMore(true);

    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );
      if (response.status === 200) {
        setProducts(prev => [...prev, ...response.data.products]);
        setTotal(response.data.total);
      }
    } catch (error) {
      console.log('API Error:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const renderItem = ({item}: any) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={{fontWeight: 'bold'}}>₹ {item.price * 83.5}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          onEndReached={() => {
            if (products.length < total) {
              getHomeData();
            }
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator size="small" color="gray" /> : null
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  card: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
