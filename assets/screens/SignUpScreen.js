import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, View, Image, SafeAreaView,Button,TouchableOpacity, Dimensions, Alert, StatusBar, ScrollView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const SignUpScreen = ({navigation}) => {
    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();
    function handleSignUp(){
        if (password==confirmPassword){
            axios({
                method: 'post',
                url: 'http://192.168.1.97:5000/api/v1/users/signup/',
                data: {
                    username,
                    email,
                    password
                }
            }).then(result=>{
                console.log(result)
                navigation.navigate('SignInScreen')
            }).catch(error=>{
                console.log(error)
            })
        }else{
            console.log('Ensure password is the same')
        }
    }
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor='#009387' barstyle = "light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Create an Account</Text>
            </View>
            <View style={styles.footer}>

                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <TextInput 
                        placeholder="Enter your email" 
                        style={styles.textIntput}
                        autoCapitalize="none"
                        onChangeText={(text)=>setEmail(text)}
                    />
                </View>

                <Text style={styles.text_footer, {marginTop: 35}}>Username</Text>
                <View style={styles.action}>
                    <TextInput 
                        placeholder="Create your username" 
                        style={styles.textIntput}
                        autoCapitalize="none"
                        onChangeText={(text)=>setUsername(text)}
                    />
                </View>     

                <Text style={styles.text_footer, {marginTop: 35}}>Password</Text>
                <View style={styles.action}>
                    <TextInput 
                        placeholder="Enter your password" 
                        secureTextEntry={true}
                        style={styles.textIntput}
                        autoCapitalize="none" 
                        onChangeText={(text)=>setPassword(text)}    
                    />
                </View>

                <Text style={styles.text_footer, {marginTop: 35}}>Confirm Password</Text>
                <View style={styles.action}>
                    <TextInput 
                        placeholder="Enter your password again" 
                        secureTextEntry={true}
                        style={styles.textIntput}
                        autoCapitalize="none" 
                        onChangeText={(text)=>setConfirmPassword(text)}
                    />
                </View>  
                <TouchableOpacity onPress={handleSignUp}>
                <View style = {styles.button}>
                        <LinearGradient
                        colors = {['#08d4c4', '#01ab9d']}
                        style = {styles.signIn}>

                            <Text style ={[styles.textSign, {
                                color: "#fff"
                                }]}>Create Account</Text>
                        </LinearGradient>
                </View>
                </TouchableOpacity>
                
                <View>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                    style = {[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}>
                        <Text style ={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign in</Text>
                    </TouchableOpacity>
                </View>       
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#33cccc'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 16
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });

  export default SignUpScreen