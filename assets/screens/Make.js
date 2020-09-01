import React, { Component, useState, useContext, useEffect } from "react";
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
import {locationContext} from '../../App';
import Axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';


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
  const {location,jwt,setJwt} = useContext(locationContext);
  const [items,setItems] = useState([]);
  const [locationId,setLocationId] = useState(0);
  const [reminder,setReminder] = useState("");
  useEffect(()=>{
    let pickerItems = location.map((item,i)=>(
    {
      label: item.name,
      value: item.id,
      icon:()=>(
        <Icon key={item.id} name='flag' size={18} color="rgb(155, 29, 32)" />
      )
    }
  ))
  setItems(pickerItems)
  },[])
  function makeReminder(){
    AsyncStorage.getItem('@jwt').then(result=>{
      setJwt(result);
    })    
    Axios({
      method:'POST',
      url:'http://192.168.1.67:5000/api/v1/reminder/create',
      headers:{
        Authorization:`Bearer ${jwt}`
      },
      data:{
        location_id:locationId,item_name:reminder
      }
    }).then(result=>{
      setLocationId(null)
      setReminder("")
    }).catch(error=>{
      console.log(error)
    })
  }
  return (
    <View style={styles.container}>
      <Content
        padder
        contentContainerStyle={{ ...styles.container, ...{ width: "100%" } }}
      >
        {/* <Text style={styles.text}>
          infoinfoinfoinfoinfoinfoinfoinfoinfoinfoinfo
        </Text> */}
        {/* <Text style={styles.text}>choose the location:</Text> */}
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
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyleModal}>Hide Modal</Text>
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
          <Text style={styles.textStyle}>?</Text>
        </TouchableHighlight>
        <View>
          <Text style={styles.textStylo}>Enter reminder:</Text>
        </View>

        <TextInput
          placeholder="new reminder"
          style={styles.input}
          onChangeText={text=>setReminder(text)}
          value={reminder}
        />

        <DropDownPicker
          items={items}
          containerStyle={{ height: 70, width: 280 }}
          style={{ backgroundColor: "white" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "rgb(114, 206, 224)" }}
          onChangeItem={(item) =>
           setLocationId(item.value)
          }
        />

        <Button style={styles.button2} onPress={makeReminder}>
          <Text style={styles.buttontext2}>ADD NEW REMINDER</Text>
        </Button>
        <Button style={styles.button3}>
          <Text style={styles.buttontext3}>SET NEW LOCATION</Text>
        </Button>
        {/* <Button style={styles.button}>
          <Text style={styles.buttontext}> Set new location! </Text>
        </Button> */}

        {/* MODAL TO ASK IF SURE */}
        {/* MODAL TO ASK IF SURE */}
        {/* MODAL TO ASK IF SURE */}
      </Content>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "rgb(255, 255, 255 )",
    // backgroundColor: "rgb(237, 240, 240 )",
    backgroundColor: "#ffe6dd",
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
  modalButton: {
    backgroundColor: "rgb(32, 139, 195)",
    borderColor: "rgb(32, 139, 195)",
    borderWidth: 5,
    borderRadius: 10,
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
  openButton: {
    backgroundColor: "rgb(96, 115, 146)",
    borderRadius: 50,
    padding: 10,
    elevation: 2,
    height: 35,
    marginBottom: 0,
    marginLeft: 320,
    marginTop: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    paddingBottom: 5,
  },
  textStyleModal: {
    padding: 3,
    color: "white",
    fontWeight: "bold",
  },
  textStylo: {
    color: "darkslategray",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 30,
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
    marginTop: 10,
    marginBottom: 10,
  },
  button2: {
    borderColor: "black",
    backgroundColor: "rgb(244, 213, 141)",
    borderWidth: 1,
    width: 250,
    paddingLeft: 23,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 300,
  },
  buttontext2: {
    color: "rgb(238, 124, 109)",
    fontWeight: "bold",
    fontSize: 20,
  },
  button3: {
    marginBottom: 50,
    marginLeft: 50,
    backgroundColor: "rgb(244, 213, 141)",
    borderRadius: 10,
    width: 250,
    borderWidth: 1,
    borderColor: "black",
  },
  buttontext3: {
    fontSize: 15,
    color: "rgb(238, 124, 109)",
    paddingLeft: 28,
    fontWeight: "bold",
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
