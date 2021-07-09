import React ,{useState} from 'react';
import { Text,View , StyleSheet,Alert,Modal} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Create = ({navigation}) =>{
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
   const [phone,setPhone] = useState('');
   const [job,setJob] = useState('')
   
  const SaveData = () =>{
      fetch("http://192.168.43.179:5000/details",{
          method:'post',
         headers:{
             'Content-type':'application/json'
         },
         body:JSON.stringify({
             name,
             email,
             phone,
             job,
         })
      })
      .then(res=>res.json())
      .then(data =>{
          Alert.alert('details saved succesfully')
          navigation.navigate('Home')
      })
      .catch(err =>{
          Alert.alert('Something went wrong')
      })
  }
   
   

      
    return(
        <View>
            <View style={styles.conatiner}>
                <View style={styles.inputconatiner}>
                    <TextInput
                    label="Name"
                    mode="outlined"
                    theme={themes}
                   onChangeText={name =>setName(name)}
                    />
                </View>
                <View style={styles.inputconatiner}>
                    <TextInput
                    label="Email"
                    mode="outlined"
                    theme={themes}
                  onChangeText={email=>setEmail(email)}
                    />
                </View>
                <View style={styles.inputconatiner}>
                    <TextInput
                    label="Mobile number"
                    mode="outlined"
                    theme={themes}
                  onChangeText={phone=> setPhone(phone)}
                    />
                </View>
                <View style={styles.inputconatiner}>
                    <TextInput
                    label="Job"
                    mode="outlined"
                    theme={themes}
                  onChangeText={job=> setJob(job)}
                    />
                </View>
               
               
                <Button mode="contained" style={styles.button}  onPress={()=> SaveData()}>
                    <Text>Save  </Text>
                    <MaterialCommunityIcons name="content-save-all-outline" size={18}/>
                </Button>
                <Button mode="contained" style={styles.button}  onPress={()=>{navigation.navigate('Home')}}>
                    <Text>Go to home  </Text>
                    
                </Button>
            </View>
        </View>
    )
    }
    const themes ={
        colors:{
          primary:'black'
        }
      }
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    inputconatiner:{
        width:350,
        top:250,
        left:30


    },
    button:{
        backgroundColor:'black',
        width:130,
        top:300,
        left:130,
        margin:5
    }
})
export default Create;