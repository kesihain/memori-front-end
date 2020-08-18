import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import LocationForm from '../components/LocationForm'

export default function LocationsScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate("home")}>Home</Text>
      <LocationForm></LocationForm>
    </View>
  );
}

const styles = StyleSheet.create({});
