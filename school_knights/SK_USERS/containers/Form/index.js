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



export default class Register extends React.Component {


    goToLoginScreen = () => {
        const { navigate } = this.props.navigation;
        navigate("Login");
    };

    goToMainScreen = () => {
        const { navigate } = this.props.navigation;
        navigate("Main");
    };

    goToFAQScreen = () =>{

        const { navigate } = this.props.navigation;
        navigate("FAQ");
    };


    constructor(props){
        super(props);
        this.state  = {
            FirstName:'',
            LastName: '',
            Email:'',
            password: '',
            confirmPassword:'',

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
    render(){
        return(
            
<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

<View style={styles.topContainer}>
   
<Text style = {styles.header}>Register </Text>

    
</View>

<View style={styles.bottomContainer}>
<View style={styles.formContainer}>
        


        
        <TextInput
            style= {styles.TextInput} placeholder ='FirstName'
            onChangeText={(FirstName) => this.setState({ FirstName})}
         >
        </TextInput>

        <TextInput style = {styles.TextInput} placeholder = 'LastName'
            onChangeText={(LastName) => this.setState({ LastName})}>

        </TextInput>

        <TextInput
            style= {styles.TextInput} placeholder ='Email'
            onChangeText={(Email) => this.setState({ Email})}
         >
        </TextInput>

        <TextInput
            style= {styles.TextInput} placeholder ='Password'
            onChangeText={(password) => this.setState({ password})}
            secureTextEntry={true}

         >
        </TextInput>

        <TextInput
            style= {styles.TextInput} placeholder ='Confirm Password'
            onChangeText={(confirmPassword) => this.setState({ confirmPassword})}
            secureTextEntry={true}
         >
        </TextInput>


        <TouchableOpacity
        style = {styles.btn}
        onPress= {this.toMain}>
            <Text style={styles.text}>Register</Text>

</TouchableOpacity>


<View style= {styles.registerAndButton}>

<Text style = {fontSize=12}>Already have an Account?</Text>

<TouchableOpacity
        style = {styles.regBtn}
        onPress= {this.toLogin}>
            <Text style={styles.text}>Log in</Text>

</TouchableOpacity>

</View>


<View style= {styles.registerAndButton}>

<Text style = {fontSize=12}>Join our KnightHood?</Text>

<TouchableOpacity
        style = {styles.regBtn}
        onPress= {this.FAQ}
>
            <Text style={styles.text}>Learn More</Text>

</TouchableOpacity>

</View>



</View  >

</View>

    </KeyboardAvoidingView>

            
        );
            
    }

    toLogin = () => {

        this.goToLoginScreen();



    };

    toMain = () => {
        if ((this.state.FirstName.trim().length > 0)&&
          (this.state.LastName.trim().length > 0)&&
        (this.state.Email.trim().length > 0) &&
          (this.state.password.trim().length > 0) &&
          (this.state.confirmPassword.trim().length > 0)){
            this.goToMainScreen()
        }
    else {
    alert('Please fill all the requested information')
        }





    };

    FAQ = () => {

        this.goToFAQScreen();
    };

}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
topContainer:{
    width: 450,
    height: 150,
    backgroundColor:  '#512FDB',
    alignItems:'flex-start'

}


    ,

    formContainer:{
        flexWrap:'wrap',
        paddingTop: 40,
        width: 300,
        height: 600,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black' ,
        alignSelf: 'center'

    },

    bottomContainer:{
        width: 400,
        height: 650,
        backgroundColor:  'white',
        alignSelf:'center',
    },

    header: {
        
        color: 'white', 
        fontWeight:'bold',
       padding:75,
        fontSize:35,

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

    registerAndButton:{
        flexDirection:'row',
        padding: 5,
        alignItems: 'center',
        justifyContent:'flex-start'    
    },

    regBtn: {


        alignSelf: 'flex-end',
        backgroundColor:  '#512FDB',
            padding: 5,
            alignItems: 'center',
            borderRadius: 50,
            borderWidth: 1
        
    },

    text:{

        
        
        color:'white'
        },

    
    

    bottomText: {
        textAlignVertical: 'center',
        fontSize: 14,
        color: 'black', 
        fontWeight:'bold',
       
    },

    









});