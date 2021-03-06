import React, { useState,Component } from 'react';

//npm install react-native-background-geolocation --save
//expo install expo-permissions
//npm install  -- global expo-cli
//Method calls the device GPS and gets the current location
const GeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const longitude = position.coords.longitude;
            const latitude = position.coords.latitude;
            console.log(longitude)
            console.log(latitude)
            return longitude,latitude
        },
        (error) => console.log(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }    
    )
    //returns current location as a JSON object
    //{"Timestamp": int
    //  "mocked":   binary
    //  "coords":   {   "altitude":     float
    //                  "heading":      float
    //                  "longitude":    float
    //                  "speed":        float
    //                  "latitude":     float
    //                  "accuracy":     float   
    //              }
    // }
    return longitude,latitude
}

export default GeoLocation

//written by Loi Kuan Ben, 19th August 2020, NextAcademy