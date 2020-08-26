import React, { useState, Component } from "react";

import { StyleSheet, Dimensions, View } from "react-native";
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
import BasicLocation from "../examples/BasicLocation";

const componentMap = {
  BasicLocation,
};
export default function LocationsScreen({ navigation }) {
  const [location, setLocation] = useState([{ id: 1, name: "Next Academy" }]);
  const [mode, setMode] = useState("BasicLocation");

  const renderExample = () => {
    const Component = componentMap[mode];
    return <Component />;
  };

  return (
    <View style={styles.container}>
      <Content
        padder
        contentContainerStyle={{ ...styles.container, ...{ width: "100%" } }}
      >
        {/* <Text style={styles.textinfo}>
          this is where the info on the screen goes. or like i could talk about
          other things too.
        </Text> */}
        <LocationForm
          location={location}
          setLocation={setLocation}
        ></LocationForm>
        {/* <BasicLocation location={location} /> */}

        <LocationList location={location}></LocationList>
      </Content>
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
  textinfo: {
    marginVertical: 20,
    fontSize: 20,
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    borderColor: "rgb(238, 124, 109)",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    flexWrap: "wrap",
  },
  switch: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 2,
    width: Dimensions.get("window").width / 3,
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
</Content>; */
}
