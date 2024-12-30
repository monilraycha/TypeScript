// // using axios dependency to make API calls

// import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import axios from 'axios'
// import { SafeAreaView } from 'react-native-safe-area-context';

// const  APIs = () => {

//     const [data , setData] = React.useState([]);

//     const baseUrl = 'https://jsonplaceholder.typicode.com';

//     const getApi = () =>{
//         axios({
//             method : 'get',
//             url: `${baseUrl}/posts`,
//         }).then((res =>{
//             console.log(res);
//             setData(res.data);
//         })).catch((err) =>{
//             console.log(err);
//         })

//         // res.data 
//         // res.status - 200 , 300 ,400 ,500
//     }

//     const getById = () =>{
//         axios({
//             method : 'get',
//             url: `${baseUrl}/posts/11`,
//         }).then((res =>{
//             console.log(res);
//             setData(res.data);
//         })).catch((err) =>{
//             console.log(err);
//         })
//     }

//     const PostApi = () =>{
//         axios({
//             method : 'POST',
//             url: `${baseUrl}/posts`,
//             body: JSON.stringify({
//              id : 101, 
//                 title: 'New Post',
//                 body: 'New Post Body'

//             })
//         }).then((res =>{
//             console.log(res);
//             setData(res.data);
//         })).catch((err) =>{
//             console.log(err);
//         })

//     }

    
//     // Difference between PATCH and PUT is that PUT is change the whole object and PATCH is change the part of object,
//     // so in PATCH we can change the title only and in PUT we can change the whole object
    
//     const PatchApi = () =>{
//         axios({
//             method : 'PATCH',
//             url: `${baseUrl}/posts/1`,
//             body: JSON.stringify({
//                 title: 'New Title',
//             })
//         }).then((res =>{
//             console.log(res);
//         })).catch((err) =>{
//             console.log(err);
//         })
//     }

//     const DeleteApi = () =>{
//        axios({
//         method : 'DELETE',
//         url: `${baseUrl}/posts/1`,
//          }).then((res =>{
//             console.log(res);
//         })).catch((err) =>{
//             console.log(err);
//        })
//     }

//   return (
//     <SafeAreaView style={{flex: 1, textAlign: 'center' , fontSize: 20}}>
//       <Text>APIs</Text>

//      <Button title="Get Data" 
//         onPress={getApi}
//      />

//      {/* <Button title="Get Data By ID" 
//         onPress={getById}
//         style={{marginTop: 10}}
//      />

//      <Button title="Post Data" 
//         onPress={PostApi}
//         style={{marginTop: 10}}
//      />

//      <Button title="PATCH Data" 
//         onPress={PatchApi}  
//         style={{marginTop: 10}}
//      />

//         <Button title="DELETE Data" 
//         onPress={DeleteApi}  
//         style={{marginTop: 10}}
//      /> */}

//       <FlatList
//         data={data}
//         style = {styles.container}
//         ListEmptyComponent={<Text>No Data Found</Text>}
//         renderItem={({item}) => (
//             <View style={{padding: 10, borderBottomWidth: 1, borderBottomColor: '#000'}}>
//                 <Text style={styles.idStyle}>{item.id}</Text>
//                 <Text style={{fontSize: 30 , fontWeight: 'bold'}}>{item.title.toUpperCase()}</Text>
//                 <Text style={{fontSize: 15 , color: 'gray'}}>{item.body}</Text>
//             </View>
//         )}
//         /> 

        
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 20,
//     }, 
//     idStyle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'blue',
//     }
// })

// export default APIs;

// // 


import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

const APIs = () => {
  const [data, setData] = React.useState([]);

  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const getApi = () => {
    axios({
      method: 'get',
      url: `${baseUrl}/posts`,
    })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text style={styles.headerText}>API Calls Using Axios</Text>

      <View style={styles.buttonContainer}>
        <Button title="Fetch Posts" onPress={getApi} color="#2a9d8f" />
      </View>

      <FlatList
        data={data}
        style={styles.flatList}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No Data Found</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.idText}>Post ID: {item.id}</Text>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.bodyText}>{item.body}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2a9d8f',
    marginVertical: 10,
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  idText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginBottom: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  bodyText: {
    fontSize: 16,
    color: '#555',
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default APIs;
