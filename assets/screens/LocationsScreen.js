import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import LocationForm from '../components/LocationForm'
import LocationList from "../components/LocationList";

export default function LocationsScreen({navigation}) {
  const [location,setLocation] = useState([
      { id: 1, name: 'Next Academy' }
  ])
  return (
    <View style={styles.container}>
      <LocationForm location={location} setLocation={setLocation}></LocationForm>
      <LocationList location={location}></LocationList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6dd',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
