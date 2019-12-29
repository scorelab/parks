import * as React from 'react';
import { View, StyleSheet, Dimensions, ImageBackground, Text } from 'react-native'
import { CardComponent } from '../../components/CardComponent/CardComponent'
import { ScrollView } from 'react-native-gesture-handler';

class SpeciesDetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { photos: [] };
    }

    static navigationOptions = ({ navigation }) => {
        const { params = [] } = navigation.state
        return {
            headerTitle: params.content[0],
            headerStyle: {
                backgroundColor: '#014421',
            },
            headerTintColor: 'white',
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.profileConatiner} source={{ uri: this.props.navigation.getParam('content')[2]}}>
                    <Text style={styles.title}>{this.props.navigation.getParam('content')[0]}</Text>
                    <Text style={styles.subtitle}>{this.props.navigation.getParam('content')[1]}</Text>
                    
                </ImageBackground>
                <ScrollView>
                    <Text style={{color: 'black', fontSize: 20, textAlign: 'center', margin: 12}}>
                        {this.props.navigation.getParam('content')[3]}
                    </Text>
                </ScrollView>
                
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
    profileConatiner: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 270,
        resizeMode: 'stretch'
    },
    title: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
    },
    userPhoto: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white'
    },
})
export default SpeciesDetailsScreen;