import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

function Help({navigation}){
    return(
        <SafeAreaView style={styles.helpscreen}>
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