import React, { useState, Component } from "react";
import { StyleSheet, View } from "react-native";
import LocationForm from "../components/LocationForm";
import LocationList from "../components/LocationList";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  List,
  Left,
  Right,
  Icon,
  ListItem,
} from "native-base";

export default function LocationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LocationForm
        location={location}
        setLocation={setLocation}
      ></LocationForm>
      <LocationList location={location}></LocationList>
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
  list: {
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: "rgb(238, 124, 109)",
    alignSelf: "stretch",
    width: 350,
  },
  listitem: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

{
  /* <Content>
  <List style={styles.list}>
    <ListItem>
      <Left>
        <Text style={styles.listitem}>Simonee Mignolet</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem>
      <Left>
        <Text style={styles.listitem}>Dejan Lovren</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem>
      <Left>
        <Text style={styles.listitem}>Nathaniel Clyne</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem>
      <Left>
        <Text style={styles.listitem}>Nathaniel Clyne</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem>
      <Left>
        <Text style={styles.listitem}>Nathaniel Clyne</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
    <ListItem>
      <Left>
        <Text style={styles.listitem}>Nathaniel Clyne</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  </List>
</Content> */
}
