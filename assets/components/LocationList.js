import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Button,
  Alert,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Content, List, ListItem, Left, Right, Icon } from "native-base";
import BasicLocation from "../examples/BasicLocation";

const componentMap = {
  BasicLocation,
};

export default function LocationList({ location }) {
  const [mode, setMode] = useState("BasicLocation");

  const renderExample = () => {
    const Component = componentMap[mode];
    return <Component />;
  };
  return (
    <View style={styles.container}>
      <Content>
        <View style={styles.switchContainer}></View>
        {/* <BasicLocation /> */}

        <List style={styles.list}>
          {location.map((item) => (
            <ListItem key={item.id}>
              <Left>
                <Text style={styles.listitem}>{item.name}</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          ))}
        </List>
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
