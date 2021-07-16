import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FromValidator } from './Validation';
 
const Login = () => {

    const [input, setInput] = useState({
      email:"",
      password:""
    })
    const [msg, setMsg] = useState({})

    console.log(input)


    const onPressHandler = () =>{
          FromValidator(input, setMsg)
    }

    console.warn(msg)
    


    return (
        

           <View style={styles.main}>
            <View style={styles.title}>
            <Icon name="user" size={40} />
            <Text style={styles.titleText}>
               Login User
           </Text>
            </View>
          <View>
          <Input
            placeholder="Enter Your Email"
            leftIcon={{ type: 'AntDesign', name: 'mail' }}
            style={styles}
            onChangeText={(text)=>setInput({...input,email:text  })}
            />
            <Text  style={{color:'red'}}>{msg.emailMsg}</Text>
          </View>
           <View>
           <Input
             
             leftIcon={{type: 'font-awesome', name: 'key'}}
             placeholder="Enter Your Password" secureTextEntry={true} 
             onChangeText={(text)=>setInput({...input,password:text  })}
             />

          <Text style={{color:'red'}}>{msg.passwordMsg}</Text>
             
           </View>

                <Button
                 onPress = {onPressHandler}
                title="Login"
                />
           </View>


        
    )
}

export default Login

const styles = StyleSheet.create({
    main:{
        paddingHorizontal:20,
        marginTop:'20%'
    },
    title:{
         alignItems:'center',
         marginVertical:30,
          

    },
    titleText:{
        fontSize:30,
        fontWeight:'bold'
    }
})
