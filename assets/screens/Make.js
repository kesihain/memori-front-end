import React, { Component, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Modal,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { Button, List, Content, Left, Right, ListItem } from "native-base";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";

// const dataArray = [
//   {
//     title: "INFO",
//     content:
//       "i wanna stay up all night and jump around until we see the sun <3",
//   },
// ];

export default function Make({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSeen, setModalSeen] = useState(false);

  return (
    <View style={styles.container}>
      <Content
        padder
        contentContainerStyle={{ ...styles.container, ...{ width: "100%" } }}
      >
        <Text style={styles.text}>choose the location:</Text>
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
                Like this UI? Follow me on IG! @hilz98
              </Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
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

        <DropDownPicker
          items={[
            {
              label: "UK",
              value: "uk",
              icon: () => (
                <Icon name="flag" size={18} color="rgb(155, 29, 32)" />
              ),
            },
            {
              label: "France",
              value: "france",
              icon: () => (
                <Icon name="flag" size={18} color="rgb(155, 29, 32)" />
              ),
            },
          ]}
          defaultValue={"france"}
          containerStyle={{ height: 40, width: 200 }}
          style={{ backgroundColor: "rgb(114, 206, 224)" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "rgb(102, 165, 200)" }}
          onChangeItem={(item) =>
            this.setState({
              country: item.value,
            })
          }
        />

        <Button style={styles.button}>
          <Text style={styles.buttontext}> Set new location! </Text>
        </Button>

        {/* MODAL TO ASK IF SURE */}
        {/* MODAL TO ASK IF SURE */}
        {/* MODAL TO ASK IF SURE */}

        <TextInput
          placeholder="new reminder"
          style={styles.input}
          // onChangeText={goalInputHandler}
          // value={enteredGoal}
        />
        <Button style={styles.button2}>
          <Text style={styles.buttontext}>ADD NEW REMINDER</Text>
        </Button>
      </Content>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "rgb(255, 255, 255 )",
    backgroundColor: "rgb(237, 240, 240 )",
    // backgroundColor: "#ffe6dd",
    alignItems: "center",
    justifyContent: "center",
  },
  Accordion: {
    width: "100%",
    flex: 1,
  },
  infotext: {
    padding: 20,
    margin: 20,
    fontSize: 30,
    borderWidth: 3,
    borderColor: "rgb(224, 159, 125)",
    backgroundColor: "rgb(224, 159, 125)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
    backgroundColor: "rgb(96, 115, 146)",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 150,
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
    // marginLeft: 90, //HOW DO I CENTER IT WITHOUT USING MARGIN
    width: 200,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 70,
  },
  button2: {
    borderColor: "black",
    backgroundColor: "rgb(236, 64, 103)",
    borderWidth: 2,
    width: 200,
    alignSelf: "center",
    marginBottom: 150,
    marginTop: 15,
  },
  buttontext: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    fontSize: 20,
  },
  text: {
    marginTop: 70,
    marginBottom: 20,
    fontSize: 30,
    borderColor: "black",
    borderWidth: 2,
    padding: 20,
    borderColor: "rgb(238, 124, 109)",
  },
  list: {
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 20,
    // backgroundColor: "rgb(238, 124, 109)",
    backgroundColor: "rgb(218, 221, 227)",

    width: 350,
    marginTop: 20,
  },
  listitem: {},
});

{
  /* <List style={styles.list}>
  <ListItem>
    <Left>
      <Text style={styles.listitem}>Simonee Mignolet</Text>
    </Left>
    <Right>
      <Icon name="arrow-left" style={{ color: "black" }} />
    </Right>
  </ListItem>
  <ListItem>
    <Left>
      <Text style={styles.listitem}>Dejan Lovren</Text>
    </Left>
    <Right>
      <Icon name="arrow-left" style={{ color: "black" }} />
    </Right>
  </ListItem>
  <ListItem>
    <Left>
      <Text style={styles.listitem}>Nathaniel Clyne</Text>
    </Left>
    <Right>
      <Icon name="arrow-left" style={{ color: "black" }} />
    </Right>
  </ListItem>
  <ListItem>
    <Left>
      <Text style={styles.listitem}>Nathaniel Clyne</Text>
    </Left>
    <Right>
      <Icon name="arrow-left" style={{ color: "black" }} />
    </Right>
  </ListItem>
  <ListItem>
    <Left>
      <Text style={styles.listitem}>Nathaniel Clyne</Text>
    </Left>
    <Right>
      <Icon name="arrow-left" style={{ color: "black" }} />
    </Right>
  </ListItem>
  <ListItem>
    <Left>
      <Text style={styles.listitem}>Nathaniel Clyne</Text>
    </Left>
    <Right>
      <Icon name="arrow-left" style={{ color: "black" }} />
    </Right>
  </ListItem>
</List> */
}
