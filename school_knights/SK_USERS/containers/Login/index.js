import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
 


export default class login extends React.Component {

    constructor(props){
        super(props);
        this.state  = {
            username: '',
            password: '',
        }
    }

    componentDidMount(){
        this._loadInitialState().done();
    }
_loadInitialState = async () => {
   
    var value = await AsyncStorage.getItem('user');
    if (value !== null){
        this.props.navigation.navigate('profile');

    }
}

    render(){
        return(
            
<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

<View style={styles.topContainer}>
   
    <Text  style={styles.header}>Login
            </Text>
</View>

<View style={styles.bottomContainer}>
<View style={styles.formContainer}>
        


        
        <TextInput
            style= {styles.TextInput} placeholder ='username'
            onChangeText={(username) => this.setState({username})  }

         >
        </TextInput>


        <TextInput
            style= {styles.TextInput} placeholder ='password'
            onChangeText={(password) => this.setState({password})  }

         >
        </TextInput>

        <TouchableOpacity
        style = {styles.btn}
        onPress= {this.login}>
            <Text style={styles.text}>Log In</Text>

</TouchableOpacity>

<Text
         style={styles.bottomText}>Need an Account? 
        </Text>
        <Text
         style={styles.bottomText}>Want to become a Knight?? 
        </Text>

</View>
</View>
   
   
  

   

   
    </KeyboardAvoidingView>

            
        );
            
    }

   
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
topContainer:{
    width: 450,
    height: 200,
    backgroundColor:  '#512FDB'
}
    ,

    formContainer:{
        
        alignItems:'center',
        justifyContent:'center',
        width: 330,
        height: 500,
        borderWidth: 1,
        borderColor: 'black'  
    },

    bottomContainer:{
        width: 400,
        height: 650,
        backgroundColor:  'white',
        alignItems: 'stretch'

    },

    header: {
        fontSize: 24,
        marginBottom: 60,
        color: 'black', 
        fontWeight:'bold',
        paddingLeft: 150,
        paddingTop: 100

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
    backgroundColor:  '#512FDB',
        padding: 20,
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 1
    },

    text:{
        color:'white'
        },

    bottomText: {
        fontSize: 14,
        color: 'black', 
        fontWeight:'bold',
        alignItems: 'baseline'
    }







});