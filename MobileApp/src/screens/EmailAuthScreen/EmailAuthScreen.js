import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, Alert } from 'react-native'
import {TextInput,HelperText, Button} from 'react-native-paper'
import {COVER, LOGO} from '../../images/index'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
export default class EmailAuthScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Sign In',
            headerStyle: {
                backgroundColor: '#0b6623',
            },
            headerTintColor: '#fff',
        }
    }

    constructor(props) {
        super(props)
        this.state={
            password: '',
            email: '',
            confirmPassword: '',
            usernamePattern:/^[a-zA-Z]+ [a-zA-Z]+$/,
            username: '',
            emailPattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#\$%\^&\*])(?=.{8,})/,
            valid: false
        }
    }

    checkValidity(){
        if(this.state.username.match(this.state.usernamePattern)
            && this.state.password.match(this.state.passwordPattern) &&
            this.state.email.match(this.state.emailPattern) && this.state.confirmPassword.match(this.state.password)
        ){
            return true
        }
        return false
       
    }

    nextBtnHandler = async () => {
        this.setState({activityIndicator: true})
        try{
            
            if(this.checkValidity()){
                await auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => { console.log("error0") })
                .catch(() => {
                    auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                        .then((err) => { 
                            // console.log("error1")
                            // alert('Successfully Registered!')
                        })
                        .catch((err) => {
                            console.log(err.message)
                            alert(err.message)
                    });
                })

            }else{
                this.setState({activityIndicator: false})
                alert("Re-check the input fields!")
            }
           
        }catch(err){
            console.log(err)
            this.setState({activityIndicator: false})
            alert(err.message)
        }
       
    }

    componentDidMount(){
        auth().onAuthStateChanged(async user => {
            if (user) {
                const uid = user.uid
                let username = user.displayName
                let photo = user.photoURL
                const email = user.email
                const ref = database().ref('/users/').child(uid);
                if(username===null){
                    await user.updateProfile({
                        displayName: this.state.username,
                        photoURL: ""
                    })
                    username = this.state.username
                    photo = ''
                }

                await ref.set({
                    name: username,
                    email: email,
                    photo: photo,
                    profile: 'user'
                });

                await this.props.navigation.navigate('App')
               
            }
            
        })
    }

    textInputCallback = (child) => {

    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={COVER}
                    style={styles.imgConatiner}
                >
                    <ScrollView contentContainerStyle={{flexGrow: 1}} style={{marginTop: 80,marginBottom: 80,flex:1,height: Dimensions.get('window').height}}>
                    <View style={styles.logoBtnCntner}>
                        <View style={styles.logoIconContainer}>
                            {/* <Image source={LOGO} style={styles.logo} /> */}
                            <Text style={styles.logoText}>SignUp</Text>
                        </View>
                        <View style={styles.btnContainer}>
                            <TextInput
                                value={this.state.username}
                                onChangeText={text => this.setState({ username: text })}
                                placeholder={'Eg. Nimal Perera'}
                                mode='flat'
                                style={{borderRadius: 0}}
                                inlineImageLeft={'account'}
                                inlineImagePadding={20}
                                autoCompleteType={'username'}
                            />
                            <HelperText
                                type="error"
                                visible={!this.state.username.match(this.state.usernamePattern)}
                            >
                                Username is invalid!
                            </HelperText>
                        </View>
                        <View style={styles.btnContainer}>
                            <TextInput
                                value={this.state.email}
                                onChangeText={text => this.setState({ email: text })}
                                placeholder={'Eg. abc@gmail.com'}
                                mode='flat'
                                style={{borderRadius: 0}}
                                inlineImageLeft={'email'}
                                inlineImagePadding={20}
                                autoCompleteType={'email'}
                            />
                            <HelperText
                                type="error"
                                visible={!this.state.email.match(this.state.emailPattern)}
                            >
                                Email is invalid!
                            </HelperText>
                        </View>
                        <View style={styles.btnContainer}>
                            <TextInput
                                value={this.state.password}
                                onChangeText={text => this.setState({ password: text })}
                                placeholder={'Password'}
                                mode='flat'
                                inlineImageLeft={'lock'}
                                secureTextEntry={true}
                                inlineImagePadding={20}
                                style={{borderRadius: 0}}
                                autoCompleteType={'password'}
                            />
                            <HelperText
                                type="error"
                                visible={!this.state.password.match(this.state.passwordPattern)}
                            >
                                Password is invalid
                            </HelperText>
                        </View>
                        <View style={styles.btnContainer}>
                            <TextInput
                                value={this.state.confirmPassword}
                                onChangeText={text => this.setState({ confirmPassword: text })}
                                placeholder={'Confirm Password'}
                                mode='flat'
                                style={{borderRadius: 0}}
                                inlineImageLeft={'lock'}
                                secureTextEntry={true}
                                inlineImagePadding={20}
                                autoCompleteType={'password'}
                            />
                            <HelperText
                                type="error"
                                visible={!this.state.confirmPassword.match(this.state.password)}
                            >
                                Password does not match!
                            </HelperText>
                        </View>
                        <View style={[styles.btnContainer, {backgroundColor: 'none'}]}>
                            <Button
                                style={styles.btn}
                                onPress={()=>this.nextBtnHandler()}
                                mode='contained'
                            >
                                Next
                            </Button>
                        </View>
                    </View>
                
                    </ScrollView>
                </ImageBackground>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
        width: Dimensions.get('window').width
    },
    btnContainer: {
        padding: 3,
        marginBottom: 3,
        borderRadius: 10,
        justifyContent: 'center',
    },
    btn: {
        width: "100%",
        height: 60,
        justifyContent:'center'
    },
    logoIconContainer: {
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 25
    },
    logo: {
        width: 70,
        height: 50
    },
    logoText: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginBottom: 20
    },
    imgConatiner: {
        flex: 1,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
    },
    logoBtnCntner: {
        flex:1,
        height: "100%",
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 20,
        width: Dimensions.get('window').width - 40,
    }
})

