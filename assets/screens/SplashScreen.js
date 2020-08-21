import React from 'react'
import {StyleSheet, Dimensions, Text, View, Image, SafeAreaView,Button,TouchableOpacity, Alert,} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require('./Logo.png')}
                style={styles.logo}
                resizeMode='stretch'/>
            </View>
            <View style={styles.footer}>
                <Text style = {styles.title}>Welcome to Memori</Text>
                <Text style = {styles.text}>Have an account? Sign in.</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={alert('Click')}>
                        <LinearGradient
                        colors = {['#08d4c4', '#01ab9d']}
                        style={styles.signIn}>
                            <Text style = {styles.textSign} >Get Started</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>        

    );
};

const {height} = Dimensions.get("screen");
const height_logo = height * 0.40;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#33cccc",
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 50,
        fontWeight: 'bold'
    },
    text: {
        color: 'blue',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    } 
  });

  export default SplashScreen;