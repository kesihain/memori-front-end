import React, { useState,Component } from 'react';

//Method calls the device GPS and gets the current location
const GeoLocation = () => {
    const [initialPosition,setPosition]=useState("unknown")

    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const initialLocation = JSON.stringify(position);
                setPosition(initialLocation);
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }    
        )
    }

    componentDidMount()
    //returns current location as a JSON string
    return initialPosition
}

export default GeoLocation

//written by Loi Kuan Ben, 19th August 2020, NextAcademy