import React from 'react'
import {StyleSheet, Dimensions, Text, View, Image, SafeAreaView,Button,TouchableOpacity, Alert,} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/AntDesign'
import * as Animatable from 'react-native-animatable'
import { useTheme } from '@react-navigation/native'

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                animation ="bounceIn"
                duration = {1500}
                source={require('./Logo.png')}
                style={styles.logo}
                resizeMode='stretch'/>
            </View>
            <Animatable.View style={styles.footer} animation='fadeInUpBig'>
                <Text style = {styles.title}>Welcome to Memori</Text>
                <Text style = {styles.text}>Press the button to begin.</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                        <LinearGradient
                        colors = {['#08d4c4', '#01ab9d']}
                        style={styles.signIn}>
                            <Text style = {styles.textSign} >Get Started</Text>
                            <Icon size={20} color="white" name="rightcircleo" />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
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
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    } 
  });

  export default SplashScreen;