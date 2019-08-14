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
import { Container } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';




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

                    <Text style={styles.nameText}>John Doe</Text>
                    <Text></Text>


                    <View style={styles.middleContainer}>






                            <View style={styles.btn}>
                                <Text>First Name:                              </Text>
                                <Text >John</Text>
                            </View>


                            <View style={styles.btn}>
                                <Text>Last Name:                              </Text>
                                <Text >Doe</Text>
                            </View>

                            <View style={styles.btn}>
                                <Text>Email:          </Text>
                                <Text >Hashcodedthis@gmail.com</Text>
                            </View>

                            <View style={styles.btn}>
                                <Text>Phone Number:                </Text>
                                <Text >510-415-1650</Text>
                            </View>


                            <View style={styles.btn}>
                                <Text>Password:                              </Text>
                                <Text >**********</Text>
                            </View>


                            <View style={styles.btn}>
                                <Text>Trips:                              </Text>
                                <Text >                10</Text>
                            </View>



                            <View style={styles.btn}>
                                <Text>Payment Methds:     </Text>
                                <Text >Visa ending in 1578</Text>
                            </View>



                            <View style={styles.btn}>
                                <Text>Tier Level:                                     </Text>
                                <Text >Gold</Text>
                            </View>





                    </View>


                    <View>
                        <Text></Text>
                        <Text></Text>

                        <TouchableOpacity style={styles.updateButton}>
                            <Text style={styles.nameText}>Register as a Knight</Text>
                        </TouchableOpacity>

                    </View>




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
        position: 'absolute',
        width: 375,
        height: 400,
        backgroundColor: '#512FDB',
        alignItems: 'center',
    },

    middleContainer: {
        
        width: 275,
        height: 320,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    },

    bottomContainer: {

        
        backgroundColor: 'gray',
        alignItems: 'center',

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
    },

    tripsContainer: {
        color: 'black',
        paddingTop: 5,
        paddingLeft: 5

    },

    ratingContainer: {
        color: 'black',
        paddingTop: 5,
        paddingRight: 5
    },

    Scroll: {

        width: 300,
        height: 150

    },
    btn: {
        flex: 3,
        backgroundColor: 'white',
        height: 40,
        alignContent:'space-around',
        borderWidth: 1,
        flexDirection: 'row',

        width: 275,
        paddingLeft: 10,
        paddingTop: 10
    },
    userInfo: {
        flex: 3,
        backgroundColor: 'white',
        height: 40,

        borderWidth: 1,
        alignItems: 'stretch',
        borderRadius: 10,
        width: 275,
        paddingLeft: 10,
        paddingTop: 10
    },

    updateButton: {


        borderRadius: 10,
        backgroundColor: '#512FDB',
        padding: 5,
        alignItems: 'center',



    },

    emptyView: {

        backgroundColor: 'black'
    }













});
