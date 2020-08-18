import React,{useState, useEffect} from 'react';
import { StyleSheet, Text,TextInput,Button,Alert, View } from "react-native";
import {useForm} from "react-hook-form";

export default function LocationForm(){
    const onSubmit = data => {
        console.log('test')
        Alert.alert("Form Data", data);
    };
    const {register,handleSubmit,setValue} = useForm();

    useEffect(()=>{
        register('location')
    },[register])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Type in location</Text>
            <TextInput style={styles.input} onChangeText={text=>{setValue('location',text)}}></TextInput>
            <Button title='Submit' color='black' onPress={handleSubmit(onSubmit)}/>
        </View>    
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffe6dd",
        alignItems:"center",
        justifyContent:'center'
    },
    text:{
        color:'darkslategray',
        fontSize:20
    },
    input:{
        borderColor:'#2E294E',
        borderWidth:1,
        borderRadius:5,
        backgroundColor:'white'
    }
})