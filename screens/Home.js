import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Alert } from 'react-native';
import { Card, FAB, Button } from 'react-native-paper';


const Home = ({ navigation }) => {


    return (
        <View style={styles.container}>
            
            <Card style={styles.mycard}
                onPress={() => { navigation.navigate('Details') }} >
                <Text style={styles.text}>James</Text>
            </Card>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    mycard: {
        //position:'relative',
        padding: 15,
       margin:10,
        width: 380,
        height: 60
    },
    text: {
        fontSize: 20
    },
    fab: {
        backgroundColor: 'black',
        bottom: -200,
        margin: 180,
        left: 150,
        width: 150,


    }

})
export default Home;