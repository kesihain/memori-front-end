import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

function Help({navigation}){
    return(
        <SafeAreaView style={styles.helpscreen}>
            <Card style ={styles.card}>
              <Card.Content>
                <Title>How do I set a new location?</Title>
                <Paragraph>From the main page, press the "Locations" button. If you want to set your current location as a location, press "Use Current Location" and then add a name for this location and press "Submit". If you would like to use another location, type its name or address in the second input field e.g KLCC and press "Set Coordinates" and you should see the coordinates of the location appear automatically below. Then you can give it a label in the first input box e.g "Mall" and then press "Submit" to save the location.</Paragraph>
              </Card.Content>
            </Card>
          
            <Card style ={styles.card}>
              <Card.Content>
                <Title>How do I create a reminder?</Title>
                <Paragraph>From the main page, click on 'Make' to create a reminder. This will redirect you to a screen where you can choose a location and what you want to be reminded of upon entering/leaving that location.</Paragraph>
              </Card.Content>
            </Card>

            <Card style ={styles.card}>
              <Card.Content>
                <Title>When creating a reminder, my location is not on the drop-down list.</Title>
                <Paragraph>You can create locations that you can set reminders with by pressing the 'Locations' button from the main page.</Paragraph>
              </Card.Content>
            </Card>

            <Card style ={styles.card}>
              <Card.Content>
                <Title>Where can I see all my reminders?</Title>
                <Paragraph>You can view all your reminders in the 'Remember' page.</Paragraph>
              </Card.Content>
            </Card>

              

       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    helpscreen: {
      flex: 1,
      backgroundColor: '#ffe6dd',
    },
    card: {
      margin: 10
    },   
  });

export default Help