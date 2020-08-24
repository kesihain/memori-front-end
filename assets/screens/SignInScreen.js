import React from 'react'
import {StyleSheet, Text, TextInput, View, Image, SafeAreaView,Button,TouchableOpacity, Dimensions, Alert, StatusBar} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

const SignInScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barstyle = "light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Let's get going!</Text>
            </View>
            <View style={styles.footer}>

                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <TextInput 
                        placeholder="Enter your username" 
                        style={styles.textIntput}
                        autoCapitalize="none"
                    />
                </View>

                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <TextInput 
                        placeholder="Enter your password" 
                        secureTextEntry={true}
                        style={styles.textIntput}
                        autoCapitalize="none" />
                </View>     
                <View style = {styles.button}>
                    <LinearGradient
                    colors = {['#08d4c4', '#01ab9d']}
                    style = {styles.signIn}>

                        <Text style ={[styles.textSign, {
                            color: "#fff"
                            }]}>Sign In</Text>
                    </LinearGradient>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style = {[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}>
                        <Text style ={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>       
            </View>
        </View>
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
        fontSize: 18
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

  export default SignInScreen