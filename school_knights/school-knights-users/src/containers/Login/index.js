import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  ScrollView
} from 'react-native';

const UserInfo = {username: 'Admin', password: 'test123'};
const UserInfo2 = {username: 'JohnDoe', password: 'big'};




export default class TestLogin extends React.Component {

  goToMainScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("Home");
  };


  goToRegisterScreen = () =>{

    const { navigate } = this.props.navigation;
    navigate("Register");
  };

  goToFAQScreen = () =>{

    const { navigate } = this.props.navigation;
    navigate("FAQ");
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }
  _loadInitialState = async () => {
 let value = await AsyncStorage.getItem("User",()=> {
   console.log("hopefully this works")
 });
if (value !== null){
  this.props.navigation("profile");

    }
  };

  render() {
    return (
<ScrollView>
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.topContainer}>

          <Text style={styles.header}>Login </Text>


        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.formContainer}>


        <Text style ={styles.Labels}>Email:</Text>

            <TextInput
              style={styles.TextInput} placeholder='email address'
              onChangeText={(username) => this.setState({ username })}

            >
            </TextInput>
            <Text style ={styles.Labels}>Password:</Text>

            <TextInput
              style={styles.TextInput} placeholder='password'
              onChangeText={(password) => this.setState({ password })}
              secureTextEntry={true}

            >
            </TextInput>

            <TouchableOpacity
              style={styles.btn}
              onPress={this.login}
            >
              <Text style={styles.text}>Log In</Text>

            </TouchableOpacity>


            <View style={styles.registerAndButton}>

              <Text style={fontSize = 12}>Need an Account?</Text>

              <TouchableOpacity
                style={styles.regBtn}
                onPress = {this.register}

              >
                <Text style={styles.text}>Register</Text>

              </TouchableOpacity>

            </View>

            <View style={styles.registerAndButton}>

              <Text style={fontSize = 12}>Join our KnightHood?</Text>

              <TouchableOpacity
                style={styles.regBtn}
                onPress = {this.FAQ}
              >
                <Text style={styles.text}>Learn More</Text>

              </TouchableOpacity>

            </View>



          </View  >

        </View>










      </KeyboardAvoidingView>
      </ScrollView>
    );


  }
  login = () => {
    if((UserInfo.username === this.state.username && UserInfo.password === this.state.password)||
    (UserInfo2.username === this.state.username && UserInfo2.password === this.state.password)){
      alert('success!');
      this.goToMainScreen();
    }
    else{
      alert('Error, Something went wrong: Username or Password are invalid Please try again')
    }
  };

  register = () => {

    this.goToRegisterScreen();
  };

  FAQ = () => {

    this.goToFAQScreen();
  };

  toProfile = () => {

    this.goToFAQScreen();
  };


}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  topContainer: {
    width: 450,
    height: 150,
    backgroundColor: '#512FDB',
    alignItems: 'flex-start'

  },
  Labels:{
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft:10

  },

  formContainer: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 40,
    width: 300,
    height: "auto",
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    alignItems: 'center'

  },

  bottomContainer: {
    width: 400,
    height: "auto",
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center'
  },

  header: {

    color: 'white',
    fontWeight: 'bold',
    padding: 75,
    fontSize: 35,

  },

  TextInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 1

  },

  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#512FDB',
    padding: 20,
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1
  },

  registerAndButton: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  regBtn: {
    alignSelf: "flex-end",
    backgroundColor: "#512FDB",
    padding: 5,
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1

  },

  text: {



    color: 'white'
  },




  bottomText: {
    textAlignVertical: 'center',
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',

  },











});