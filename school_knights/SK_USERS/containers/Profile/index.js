import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    TouchableHighlight,
    Image
} from 'react-native';




export default class Profile extends React.Component {


    render() {
        return (

            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

                <View style={styles.topContainer}>

                    <Text style={styles.header}>My Profile</Text>
                    <TouchableHighlight
                        style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}
                    >
                        <Image source={{ uri: "/Users/Teo/Desktop/csc642-team9-UIX/school_knights/SK_USERS/assets/SorrowfulElasticHyracotherium-small.gif" }} style={styles.profileImg} />
                    </TouchableHighlight>

                    <Text style={styles.nameText}>My Name</Text>

                </View>






            </KeyboardAvoidingView>


        );

    }


}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    topContainer: {
        width: 375,
        height: 400,
        backgroundColor: '#512FDB',
        alignItems: 'center',


    },
    bottomContainer: {

    },

    header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
        justifyContent: 'center',
        paddingTop: 150,

    },

    nameText: {
        color: 'white',
        fontSize: 20,
        justifyContent: 'center',
        color: 'black'

    },

    profileImgContainer: {
        marginLeft: 8,
        height: 80,
        width: 80,
        borderRadius: 40,

    },
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
    }













});
