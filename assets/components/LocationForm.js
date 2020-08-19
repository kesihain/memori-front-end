import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, Button, Alert, View } from "react-native";
import { useForm } from "react-hook-form";

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
    console.log(location);
  };
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register("location");
  }, [register]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Type in location</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(text) => {
          setValue("location", text);
          setText(text);
        }}
      ></TextInput>
      <Button title="Submit" color="black" onPress={handleSubmit(onSubmit)} />
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
    fontSize: 20,
  },
  input: {
    borderColor: "#2E294E",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
  },
});
