import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";

export default function BasicLocation({ location }) {
  // const [location, setListData] = useState(
  //   Array(20)
  //     .fill("")
  //     .map((_, i) => ({ key: `${i}`, name: `location #${i}` }))
  // );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...location];
    const prevIndex = location.findIndex((location) => location.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableHighlight
        onPress={() => console.log("ooooo you touch my tralala")}
        style={styles.rowFront}
        underlayColor={"#AAA"}
      >
        <View>
          <Text> {item.name} </Text>
        </View>
      </TouchableHighlight>
    );
  };

  const renderHiddenItem = (location, rowMap) => (
    <View style={styles.rowBack}>
      <Text>Left</Text>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => closeRow(rowMap, location.key)}
      >
        <Text style={styles.backTextWhite}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, location.key)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={location}
        // data={[
        //   {
        //     key: 1,
        //     name: "Home",
        //   },
        //   {
        //     key: 2,
        //     name: "Work",
        //   },
        //   {
        //     key: 3,
        //     name: "Secret hideout",
        //   },
        // ]}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    // width: "100%",
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
});
