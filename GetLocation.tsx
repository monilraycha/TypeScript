// import GetLocation from 'react-native-get-location'

// GetLocation.getCurrentPosition({
//     enableHighAccuracy: true,
//     timeout: 60000,
// })
// .then(location => {
//     console.log(location);
// })
// .catch(error => {
//     const { code, message } = error;
//     console.warn(code, message);
// })

import { PermissionsAndroid, Platform, StyleSheet, Text, View , Button } from 'react-native'
import React , {useState, useEffect} from 'react'
import Geolocation from 'react-native-geolocation-service';


  const  GetLocation : React.FC = () => {
 
    const [location , setLocation] = useState<{latitude : number , longitude : number} | null >(null);
    const [errorMsg , setErrorMsg] = useState<string>('');

    const hasLocationPermission = async () => {
        if(Platform.OS === 'ios') {
            return true;

        }

        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        return granted === PermissionsAndroid.RESULTS.GRANTED;
    }

    const getLocation = async () => {
        const hasPermission = await hasLocationPermission();

        if(!hasPermission) {
            setErrorMsg('Permission denied');
            return;
        }
    }
    
     Geolocation.getCurrentPosition(
         (position) => {
            const {latitude , longitude} = position.coords;
             setLocation(position.coords);
         },
         (error) => {
             setErrorMsg(error.message);
         },
         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
     )




  return (
    <View  style={styles.container}>
        <Text style={styles.text}> Current Location :</Text>
        {
            location ? 
            (
                <Text style={styles.location}>
                    Latitude : {location.latitude}, Longitude : {location.longitude}
                </Text>
            ) : (
                <Text style={styles.error}>{errorMsg || 'No location found'}</Text>
            )
        }

           <Button title="Get Location" onPress={getLocation} />

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    text: {
      fontSize: 18,
      marginBottom: 12,
    },
    location: {
      fontSize: 16,
      marginVertical: 8,
    },
    error: {
      fontSize: 16,
      color: 'red',
      marginVertical: 8,
    },
  });


export default GetLocation;