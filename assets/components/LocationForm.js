import React,{useState, useEffect} from 'react';
import { StyleSheet, Text,TextInput,Button,Alert, View } from "react-native";
import {useForm} from "react-hook-form";

export default function LocationForm(){
    const onSubmit = data => {
        Alert.alert("Form Data", data);
    }
    const {register,handleSubmit,setValue} = useForm();

    useEffect(()=>{
        register('location')
    },[register])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Type in locatio</Text>
            <TextInput style={styles.input} onChangeText={text=>{setValue('location',text)}}></TextInput>
        </View>    
    )
}