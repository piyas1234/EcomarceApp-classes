import React, {useContext, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Api from '../../global/Api/Api';
import { DataManger } from '../../global/Context/Context';
import {FromValidator} from './Validation';


const Login = () => {
  const {Auth, setAuth} = useContext(DataManger)
  const [loading, setLoading] = useState(false)
  const [errmsg, seterrMsg] = useState("")
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [msg, setMsg] = useState({});

  console.log(input);

  const onPressHandler =   async () => {
      await FromValidator(input, setMsg);
       
       await ServerRequest()
            
      
    
  
     
    
  };


  const ServerRequest =  async () =>{
    try{
      await setLoading(true)
      const Data = await Api.post('/auth/login', input)
      await setAuth(Data.data)
      await setLoading(false)
     }
     catch(err){
       console.log(err)
       setLoading(false)
       seterrMsg("Email or password is wrong!!")
     }
   }

 if(errmsg){
  Alert.alert(errmsg)
  seterrMsg("")
 }
   

  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <Icon name="user" size={40} />
        <Text style={styles.titleText}>Login User</Text>
      </View>
      <View>
       
        <Input
          placeholder="Enter Your Email"
          leftIcon={{type: 'AntDesign', name: 'mail'}}
          style={styles}
          onChangeText={text => setInput({...input, email: text})}
          errorMessage = {msg.emailMsg} 
           
        />
        
      </View>
      <View>
        
        <Input
          leftIcon={{type: 'font-awesome', name: 'key'}}
          placeholder="Enter Your Password"
          secureTextEntry={true}
          onChangeText={text => setInput({...input, password: text})}
          errorMessage={msg.passwordMsg}
        />
      </View>

       {!loading && <Button   onPress={onPressHandler} title="Login" />}
      {loading &&  <Button  loading onPress={onPressHandler} title="Login" />}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
    marginTop: '20%',
  },
  title: {
    alignItems: 'center',
    marginVertical: 30,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
