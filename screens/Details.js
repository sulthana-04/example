import React from 'react';
import {Text,View,StyleSheet, Alert} from 'react-native';
import {Card, Button} from 'react-native-paper';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Details = ({navigation}) =>{
    
        
      return (
          <View>
              <Card style={styles.card}>
                  <Text>James</Text>
              </Card>
              <Card style={styles.card}>
                  <Text>james@gmail.com</Text>
              </Card>
              <Card style={styles.card}>
                  <Text>90909090909</Text>
              </Card>
              <Card style={styles.card}>
                  <Text>Software engineer</Text>
              </Card>
              <Button mode="contained" style={styles.button} onPress={()=>{navigation.navigate("Update") }}>
                  <Text>Edit </Text>
                  <FontAwesome5 size={15} name="edit"/>
              </Button>
              <Button mode="contained" style={styles.button1} onPress={()=>{navigation.navigate('Home')}}>
                  <Text>Delete </Text>
                  <MaterialCommunityIcons size={15} name="delete-outline"/>
                  
              </Button>
          </View>
      )
  }
  const styles = StyleSheet.create({
      card:{
          padding:15,
          margin:7,
          top:200
      },
      button:{
          backgroundColor:'black',
          width:120,
          top:240,
          left:10
      },
      button1:{
          backgroundColor:'black',
          width:120,
          top:200,
          left:250
      }
  })
  export default Details;