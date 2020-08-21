import React from 'react'
import {StyleSheet, Text, View, Image, SafeAreaView,Button,TouchableOpacity, Alert,} from "react-native";

const SignUpScreen = () => {
    return (
        <View style={styles.container}>x
        <Text>Sign In</Text>
        <Button
            title = "Click Here"
            onPress={() => alert('Button Clicked')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffe6dd",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  export default SignUpScreen