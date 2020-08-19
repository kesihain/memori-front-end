import React from 'react';
import { StyleSheet, Text,TextInput,Button,Alert, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function LocationList({location}){

    return (
        <View style={styles.container}>
            <FlatList
                data={location}
                renderItem={({item})=>
                <View>
                    <Text>{item.name}</Text>
                </View>
            }
            ></FlatList>
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