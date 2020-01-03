import * as React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import auth from '@react-native-firebase/auth';
import {LOGO} from '../../images/index'

class LandingScreen extends React.Component {
    componentDidMount(){
        auth().onAuthStateChanged( user => {
            if (user!==null) {
                this.props.navigation.navigate('App')
            }else {
                this.props.navigation.navigate('SignIn')
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={LOGO} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0FFFF',
        width: Dimensions.get('window').width
    },
    img: {
        width: 100, 
        height: 100, 
        resizeMode: 'stretch'
    },
    welcome: {
        fontSize: 25
    }
})
export default LandingScreen;