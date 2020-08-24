import React,{useContext,useState} from 'react'

const LocationContext = React.createContext()
const LocationUpdateContext = React.createContext()

export function useLocation(){
    return useContext(LocationContext)
}

export function useLocationUpdate(){
    return useContext(LocationUpdateContext)
}

export function LocationProvider(){
    const [currentLocation,setCurrentLocation] = useState({})

    function saveLocation(){
        
    }
}