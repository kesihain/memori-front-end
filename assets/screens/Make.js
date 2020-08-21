import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import LocationList from "../components/LocationList";
import { Dropdown } from "react-native-material-dropdown";

export default function Make() {
  return (
    <View>
      <Text>info on how to use this screen</Text>

      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      <TextInput
        placeholder="new reminder"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal} //this is the state called enteredGoal
      />

      <Button title="ADD NEW REMINDER" onPress={/* bring to form */} />

      {/* 
      
      <FlatList // data propety is an array and renderitem takes a function that is called for every item in the array to render a list item
        data={courseGoals}
        renderItem={(
          itemData //itemData is an object with item and index property
        ) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )} /* itemData.item is the enteredGoal */
        />

      */}
    </View>
  );
}

const styles = StyleSheet.create({});
