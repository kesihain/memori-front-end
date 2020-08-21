import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, Alert, View } from "react-native";
import { Button } from "native-base";
import { useForm } from "react-hook-form";
import Geolocation from '../utils/geolocation'

export default function LocationForm({ location, setLocation }) {
  const [text, setText] = useState("");
  const [id, setId] = useState(location[location.length - 1].id + 1); //might need some change when using back-end api
  const onSubmit = (data) => {
    if (
      data.location != "" &&
      !Object.values(location).includes(data.location)
    ) {
      setId(id + 1);
      setLocation([...location, { id: id, name: data.location }]);
      setValue("location", "");
      setText("");
    }
    console.log('here')
    console.log(Geolocation());
  };
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register("location");
  }, [register]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter location:</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(text) => {
          setValue("location", text);
          setText(text);
        }}
      ></TextInput>
      <Button style={styles.button} onPress={handleSubmit(onSubmit)} bordered success>
        <Text style={styles.buttontext} >Submit</Text>
      </Button>
      <Text style={styles.locationstext}>Your locations:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6dd",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "darkslategray",
    fontSize: 50,
    textAlign: "center",
  },
  input: {
    borderColor: "#2E294E",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    width: 200,
    height: 50,
  },
  button: {
    justifyContent: "center",
    borderWidth: 200,
    backgroundColor: "rgb(244, 213, 141)",
    borderColor: "black",
    alignItems: "center",
    width: 200,
    marginTop: 20,
    marginLeft: 48,
    justifyContent: "center",
  },
  buttontext: {
    color: "rgb(238, 124, 109)",
    fontWeight: "bold",
    fontSize: 20,
  },
  locationstext: {
    marginTop: 50,
    fontSize: 40,
  },
});
