import React from "react";
import { StyleSheet, Text, TextInput, Button, Alert, View, } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Content,List, ListItem,Left,Right,Icon } from "native-base";

export default function LocationList({ location }) {
  return (
    <View style={styles.container}>
      <Content>
        <List style={styles.list}>
          {location.map(item=>(
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
});
