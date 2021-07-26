import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Api2} from '../../global/Api/Api';
const SignUp = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirm_Password: '',
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);

    if (
      input.name !== '' &&
      input.email !== '' &&
      input.password !== '' &&
      input.confirm_Password !== ''
    ) {
      if (input.password === input.confirm_Password) {
        const response = await Api2.post('/auth/signup', input);
        console.log(response);
        Alert.alert('signup', response.data.message);
        return await setLoading(false);
      } else {
        Alert.alert('Wrong Password', 'password should be same');
        return setLoading(false);
      }
    } else {
      Alert.alert('input validation', 'Please fill all the fields!');
      return setLoading(false);
    }
  };

  console.log(input);

  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <Icon name="user" size={40} />
        <Text style={styles.titleText}>SignUp User</Text>
      </View>
      <View>
        <Input
          placeholder="Enter Your name"
          leftIcon={{type: 'font-awesome', name: 'user'}}
          style={styles}
          onChangeText={text => setInput({...input, name: text})}
        />
      </View>

      <View>
        <Input
          placeholder="Enter Your Email"
          leftIcon={{type: 'AntDesign', name: 'mail'}}
          style={styles}
          onChangeText={text => setInput({...input, email: text})}
        />
      </View>

      <View>
        <Input
          leftIcon={{type: 'font-awesome', name: 'key'}}
          placeholder="Enter Your Password"
          secureTextEntry={true}
          onChangeText={text => setInput({...input, password: text})}
        />
      </View>

      <View>
        <Input
          leftIcon={{type: 'font-awesome', name: 'key'}}
          placeholder="Confirm Your Password"
          secureTextEntry={true}
          onChangeText={text => setInput({...input, confirm_Password: text})}
        />
      </View>

      <Button onPress={onSubmit} title="SignUp" loading={loading} />
    </View>
  );
};

export default SignUp;

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
