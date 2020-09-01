import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, TextInput, Alert, View, ScrollView } from "react-native";
import { Button } from "native-base";
import { useForm } from "react-hook-form";
import Geolocation from '../utils/geolocation';
import Axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import { locationContext } from "../../App";
import * as Location from 'expo-location';
import { add } from "react-native-reanimated";


export default function LocationForm({ location, setLocation }) {
  const [address,setAddress] = useState("");
  const [name,setName] = useState("");
  const {jwt,setJwt} = useContext(locationContext);
  const [latitude,setLatitude] = useState("");
  const [ longitude,setLongitude] = useState("");
  const getCoords = async ()=>{
    let coordinate =  await Location.geocodeAsync(address);
    setLatitude(coordinate[0].latitude);
    setLongitude(coordinate[0].longitude);
  }

  const getLocation = async ()=>{
    let coordinate = await Location.getCurrentPositionAsync({});
    setLatitude(coordinate.coords.latitude);
    setLongitude(coordinate.coords.longitude);
    let geoAddress = await Location.reverseGeocodeAsync({latitude:parseInt(coordinate.coords.latitude),longitude:parseInt(coordinate.coords.longitude)})
    console.log(geoAddress);
    let geoCode = geoAddress[0];
    let geoString = `${geoCode.name} ${geoCode.street} ${geoCode.postalCode} ${geoCode.region} ${geoCode.city} ${geoCode.country}`
    setAddress(geoString)
  }

  function submitLocation(){
    AsyncStorage.getItem('@jwt').then(result=>{
      setJwt(result);
    })
    if (address.length>0 && name.length>0){
      Axios({
        method:'POST',
        url:'http://192.168.1.67:5000/api/v1/location/create',
        headers:{
          Authorization:`Bearer ${jwt}`
        },
        data:{
          name:name,
          address:address,
          latitude:latitude,
          longitude:longitude
        }
      }).then(result=>{
        setLocation([...location, result.data
        ])
        setAddress("");
        setName("");
        setLatitude("");
        setLongitude("");
      }).catch(error=>{
        console.log(error);
      })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter location:</Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder='Type name of location'
        onChangeText={(text) => {
          // setValue("location", text);
          setName(text);
        }}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={address}
        placeholder='Type full address'
        onChangeText={(text) => {
          setAddress(text);
        }}
      ></TextInput>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
      <Button
        style={styles.button}
        onPress={getCoords}
        bordered
        success
      >
        <Text style={styles.buttontext}>Set Coordinates</Text>
      </Button>
      <Button
        style={styles.button}
        onPress={getLocation}
        bordered
        success
      >
        <Text style={styles.buttontext}>Use current Location</Text>
      </Button>
      <Button
        style={styles.button}
        onPress={submitLocation}
        bordered
        success
      >
        <Text style={styles.buttontext}>Submit</Text>
      </Button>
      <Text style={styles.locationstext}>Your locations:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6dd",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "darkslategray",
    fontSize: 50,
    textAlign: "center",
  },
  input: {
    borderColor: "#2E294E",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    width: 200,
    height: 50,
    marginRight: 7,
  },
  button: {
    justifyContent: "center",
    borderWidth: 200,
    backgroundColor: "rgb(244, 213, 141)",
    borderColor: "black",
    alignItems: "center",
    width: 200,
    marginTop: 20,
    marginLeft: 48,
    justifyContent: "center",
  },
  buttontext: {
    color: "rgb(238, 124, 109)",
    fontWeight: "bold",
    fontSize: 20,
  },
  locationstext: {
    marginTop: 50,
    fontSize: 40,
  },
});
