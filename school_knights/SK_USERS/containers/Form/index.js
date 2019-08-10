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
 



export default class register extends React.Component {

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
   
<Text style = {styles.header}>Register </Text>

    
</View>

<View style={styles.bottomContainer}>
<View style={styles.formContainer}>
        


        
        <TextInput
            style= {styles.TextInput} placeholder ='FirstName'
         >
        </TextInput>

        <TextInput style = {styles.TextInput} placeholder = 'LastName'>

        </TextInput>

        <TextInput
            style= {styles.TextInput} placeholder ='Email'
         >
        </TextInput>

        <TextInput
            style= {styles.TextInput} placeholder ='Password'
         >
        </TextInput>

        <TextInput
            style= {styles.TextInput} placeholder ='Confirm Password'
         >
        </TextInput>


        <TouchableOpacity
        style = {styles.btn}
        onPress= {this.login}>
            <Text style={styles.text}>Register</Text>

</TouchableOpacity>


<View style= {styles.registerAndButton}>

<Text style = {fontSize=12}>Already have an Account?</Text>

<TouchableOpacity
        style = {styles.regBtn}
        onPress= {this.login}>
            <Text style={styles.text}>Log in</Text>

</TouchableOpacity>

</View>


<View style= {styles.registerAndButton}>

<Text style = {fontSize=12}>Join our KnightHood?</Text>

<TouchableOpacity
        style = {styles.regBtn}
        onPress= {this.login}>
            <Text style={styles.text}>Learn More</Text>

</TouchableOpacity>

</View>



</View  >

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

        backgroundColor:  '#512FDB',
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