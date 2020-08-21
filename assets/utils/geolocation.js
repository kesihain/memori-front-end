import React, { useState,Component } from 'react';

//npm install react-native-background-geolocation --save
//expo install expo-permissions
//npm install  -- global expo-cli
//Method calls the device GPS and gets the current location
const GeoLocation = (inputFunction) => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const initialLocation = JSON.stringify(position);
                // console.log(initialLocation);
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
    return initialLocation
}

export default GeoLocation

//written by Loi Kuan Ben, 19th August 2020, NextAcademy