import React, { Component, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { Button, List, Left, Content, Right, ListItem } from "native-base";
import DropDownPicker from "react-native-dropdown-picker";
import { SwipeListView } from "react-native-swipe-list-view";

import Basic from "../examples/Basic";

const componentMap = {
  Basic,
};

export default function Remember({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  // const [modalCanBeSeen, setModalCanBeSeen] = useState(false);

  const [mode, setMode] = useState("Basic");

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
        <Text style={styles.textinfo}>
          this is where the info on the screen goes. or like i could talk about
          other things too.
        </Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                A day without sunshine is like, you know, night.
              </Text>

              <TouchableHighlight
                style={{
                  ...styles.openButton,
                  backgroundColor: "rgb(202, 110, 143)",
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>ugh</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Need some help?</Text>
        </TouchableHighlight>
        <View style={styles.switchContainer}>
          <Basic />
        </View>
      </Content>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ffe6dd",
    backgroundColor: "#ffe6dd",
    backgroundColor: "rgb(4, 110, 143)",
    // backgroundColor: "rgb(0, 144, 193)",
    alignItems: "center",
    justifyContent: "center",
  },
  Accordion: {
    width: "100%",
    flex: 1,
  },
  textinfo: {
    marginBottom: 10,
    fontSize: 20,
    borderColor: "black",
    borderWidth: 10,
    padding: 10,
    borderColor: "rgb(202, 110, 143)",
    backgroundColor: "rgb(202, 226, 234)",
    // backgroundColor: "rgb(0, 144, 193)",
  },
  dropdown: {
    margin: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  textC: {
    marginVertical: 10,
    fontSize: 20,
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    borderColor: "rgb(238, 124, 109)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "rgb(172, 51, 94 )",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 80,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    marginVertical: 10,
  },
  button: {
    borderColor: "black",
    backgroundColor: "rgb(236, 64, 103)",
    borderWidth: 2,
    width: 200,
    alignSelf: "center",
  },
  buttontext: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
  },
  text: {
    marginVertical: 20,
    fontSize: 20,
    borderColor: "black",
    borderWidth: 2,
    padding: 20,
    borderColor: "rgb(238, 124, 109)",
  },
  list: {
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: "rgb(rgb(218, 221, 227))",
    width: 350,
    marginTop: 20,
  },
  listitem: {},
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 50,
    flexWrap: "wrap",
  },
  switch: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 2,
    paddingVertical: 10,
    width: Dimensions.get("window").width / 3,
  },
});

// DAY 23: *panting heavily* water resources running low... oxygen levels dangerously falling... and i still dont know how to make a swipeable list on reacct native....................someone remind me to delete this
