import React, { Component, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  TouchableHighlight,
  View,
} from "react-native";
import { Button, List, Left, Content, Right, ListItem } from "native-base";
import DropDownPicker from "react-native-dropdown-picker";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/AntDesign";

import Basic from "../examples/Basic";

const componentMap = {
  Basic,
};

export default function Remember({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCanBeSeen, setModalCanBeSeen] = useState(false);

  const [mode, setMode] = useState("Basic");

  const renderExample = () => {
    const Component = componentMap[mode];
    return <Component />;
  };
  return (
    <ScrollView style={styles.container}>
      <Content
        padder
        contentContainerStyle={{ ...styles.container, ...{ width: "100%" } }}
      >
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>?</Text>
        </TouchableHighlight>

        <Modal //1
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
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>ugh</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <Modal //2
          animationType="slide"
          transparent={true}
          visible={modalCanBeSeen}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>edit your reminder...</Text>
              <TextInput placeholder="blablabla" />

              <TouchableHighlight
                style={styles.modalButton}
                onPress={() => {
                  setModalCanBeSeen(!modalCanBeSeen);
                }}
              >
                <Text style={styles.textStyle}>tutup modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <View style={styles.switchContainer}>
          <List style={styles.list}>
            <ListItem itemHeader first>
              <Text style={styles.listTextHeader}>COMEDY</Text>
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.listText}>Simon Mignolet</Text>
              <Icon
                name="edit"
                size={20}
                color="white"
                style={{ marginHorizontal: 25 }}
                onPress={() => {
                  setModalCanBeSeen(true);
                }}
              />
              <Icon
                style={styles.listIcons}
                name="delete"
                size={20}
                color="white"
              />
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.listText}>Nathaniel Clyne</Text>
              <Icon
                name="edit"
                size={20}
                color="white"
                style={{ marginHorizontal: 25 }}
              />
              <Icon
                style={styles.listIcons}
                name="delete"
                size={20}
                color="white"
              />
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.listText}>Dejan Lovren</Text>
              <Icon
                name="edit"
                size={20}
                color="white"
                style={{ marginHorizontal: 25 }}
              />
              <Icon
                style={styles.listIcons}
                name="delete"
                size={20}
                color="white"
              />
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.listText}>Dejan Lovren</Text>
              <Icon
                name="edit"
                size={20}
                color="white"
                style={{ marginHorizontal: 25 }}
              />
              <Icon
                style={styles.listIcons}
                name="delete"
                size={20}
                color="white"
              />
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.listText}>Dejan Lovren</Text>
              <Icon
                name="edit"
                size={20}
                color="white"
                style={{ marginHorizontal: 25 }}
              />
              <Icon
                style={styles.listIcons}
                name="delete"
                size={20}
                color="white"
              />
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.listText}>Dejan Lovren</Text>
              <Icon
                name="edit"
                size={20}
                color="white"
                style={{ marginHorizontal: 25 }}
              />
              <Icon
                style={styles.listIcons}
                name="delete"
                size={20}
                color="white"
              />
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.listText}>Dejan Lovren</Text>
              <Icon
                name="edit"
                size={20}
                color="white"
                style={{ marginHorizontal: 25 }}
              />
              <Icon
                style={styles.listIcons}
                name="delete"
                size={20}
                color="white"
              />
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.listText}>Dejan Lovren</Text>
              <Icon
                name="edit"
                size={20}
                color="white"
                style={{ marginHorizontal: 25 }}
              />
              <Icon
                style={styles.listIcons}
                name="delete"
                size={20}
                color="white"
              />
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.listText}>Dejan Lovren</Text>
              <Icon
                name="edit"
                size={20}
                color="white"
                style={{ marginHorizontal: 25 }}
              />
              <Icon
                style={styles.listIcons}
                name="delete"
                size={20}
                color="white"
              />
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.listText}>Dejan Lovren</Text>
              <Icon
                name="edit"
                size={20}
                color="white"
                style={{ marginHorizontal: 25 }}
              />
              <Icon
                style={styles.listIcons}
                name="delete"
                size={20}
                color="white"
              />
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.listText}>
                Dejan LovrenLovrenLovren Lovren Lovren LovrenLovrenLovren Lovren
                LovrenLovrenLovrenLovren Lovren Lovrend
              </Text>
              <Icon
                name="edit"
                size={20}
                color="white"
                style={{ marginHorizontal: 25 }}
              />
              <Icon
                style={styles.listIcons}
                name="delete"
                size={20}
                color="white"
              />
            </ListItem>
            <ListItem style={styles.listItem}>
              <Text style={styles.listText}>
                Dejan LovrenLovren LovrenLovren LovrenLovrenLovrenLovrenLovren
                Lovren LovrenLovren LovrenLovren LovrenLovren Lovren
                LovrenLovren LovrenLovren LovrenLovren
              </Text>
              <View style={styles.listIcons}>
                <Icon
                  name="edit"
                  size={20}
                  color="white"
                  style={{ marginHorizontal: 25 }}
                />
                <Icon name="delete" size={20} color="white" />
              </View>
            </ListItem>
          </List>
        </View>
      </Content>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6dd",
    // backgroundColor: "rgb(4, 110, 143)",
    // backgroundColor: "rgb(0, 144, 193)",
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
  modalButton: {
    backgroundColor: "rgb(32, 139, 195)",
    borderColor: "rgb(32, 139, 195)",
    borderWidth: 5,
    borderRadius: 10,
  },
  openButton: {
    backgroundColor: "rgb(172, 51, 94 )",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 0,
    marginBottom: 70,
    marginLeft: 300,
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
    backgroundColor: "rgb(65, 97, 101)",
    width: 350,
    marginTop: 20,
  },
  listItem: {
    // alignItems: "center",
    justifyContent: "space-between",
    // textAlign: "center",
  },
  listIcons: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  listText: {
    width: "70%",
    color: "white",
    fontSize: 17,
  },
  listTextHeader: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 100,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 300,
    flexWrap: "wrap",
    elevation: 2,
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
