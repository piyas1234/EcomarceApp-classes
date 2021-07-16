import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = () => {
    
  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <Icon name="user" size={40} />
        <Text style={styles.titleText}>SignUp User</Text>
      </View>
      <View>
        <Input
          placeholder="Enter Your Username"
          leftIcon={{type: 'font-awesome', name: 'user'}}
          style={styles}
        />
      </View>

      <View>
        <Input
          placeholder="Enter Your Email"
          leftIcon={{type: 'AntDesign', name: 'mail'}}
          style={styles}
        />
      </View>

      <View>
        <Input
          leftIcon={{type: 'font-awesome', name: 'key'}}
          placeholder="Enter Your Password"
          secureTextEntry={true}
        />
      </View>

      <View>
        <Input
          leftIcon={{type: 'font-awesome', name: 'key'}}
          placeholder="Confirm Your Password"
          secureTextEntry={true}
        />
      </View>

      <Button title="SignUp" />
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
