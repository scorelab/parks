import * as React from 'react';
import { View, Text, Dimensions,ImageBackground,ScrollView, StyleSheet } from 'react-native'
import { Button,List, Avatar, Divider } from 'react-native-paper'
class ParkDetails extends React.Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => {
        const { params = [] } = navigation.state
        return {
            headerTitle: params.title,
            headerStyle: {
                backgroundColor: '#4b8b3b',
            },
            headerTintColor: 'white',

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.profileConatiner} source={{ uri: this.props.navigation.getParam('img')}}>
                    <Text style={styles.title}>{this.props.navigation.getParam('title')}</Text>
                    <Text style={styles.subtitle}>{this.props.navigation.getParam('subtitle')}</Text>
                    {/* <Image style={styles.userPhoto} source={{ uri: this.state.userPhoto }}></Image>
                    <Text style={styles.userName}>{this.state.userName}</Text>
                    <Text style={styles.userNick}>Observations</Text>
                    <Text style={styles.obCount}>{this.state.noObs}</Text> */}
                    <Button onPress={()=>this.props.navigation.navigate('FeedScreen',{img: this.props.navigation.getParam('img'), title: this.props.navigation.getParam('title')})} mode='contained' style={{ marginTop: 15 }}>Let's Go</Button>
                </ImageBackground>

                <ScrollView style={{width: Dimensions.get('window').width}}>
                    <List.Item
                        title="Sri Lankan sambar deer"
                        description="Rusa unicolor unicolor"
                        left={props => <Avatar.Image size={80} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Sambar_%28Cervus_unicolor_unicolor%29_male.jpg/1920px-Sambar_%28Cervus_unicolor_unicolor%29_male.jpg'}}/>}
                    />
                    <Divider/>
                    <List.Item
                        title="Sri Lankan axis deer"
                        description="Axis axis ceylonensis"
                        left={props => <Avatar.Image size={80} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Sri_Lankan_axis_deer_%28Axis_axis_ceylonensis%29.JPG/800px-Sri_Lankan_axis_deer_%28Axis_axis_ceylonensis%29.JPG'}}/>}
                    />
                    <Divider/>
                    <List.Item
                        title="Indian muntjac"
                        description="Muntiacus muntjak"
                        left={props => <Avatar.Image size={80} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Barking-Deer_Manas-Tiger-Reserve_Assam_India.jpg'}}/>}
                    />
                    <Divider/>
                    <List.Item
                        title="Sri Lankan spotted chevrotain"
                        description="Moschiola meminna"
                        left={props => <Avatar.Image size={80} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/MouseDeer0.jpg/1280px-MouseDeer0.jpg'}}/>}
                    />
                    <Divider/>
                    <List.Item
                        title="Wild boar"
                        description="Sus scrofa"
                        left={props => <Avatar.Image size={80} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/20160208054949%21Wildschein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg/1280px-20160208054949%21Wildschein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg'}}/>}
                    />
                    <Divider/>
                    <List.Item
                        title="Sri Lanka spurfowl"
                        description="Galloperdix bicalcarata"
                        left={props => <Avatar.Image size={80} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/GalloperdixBicalcarataLegge.jpg/1024px-GalloperdixBicalcarataLegge.jpg'}}/>}
                    />
                    <Divider/>
                    <List.Item
                        title="Red-faced malkoha"
                        description="Phaenicophaeus pyrrhocephalus"
                        left={props => <Avatar.Image size={80} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Red-faced_Malkoha_x.jpg'}}/>}
                    />
                    <Divider/>
                    <List.Item
                        title="Rusty-spotted cat"
                        description="Prionailurus rubiginosus"
                        left={props => <Avatar.Image size={80} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rusty_spotted_cat_1.jpg/1920px-Rusty_spotted_cat_1.jpg'}}/>}
                    />
                    <Divider/>
                    <List.Item
                        title="Sri Lankan leopard"
                        description="Panthera pardus kotiya"
                        left={props => <Avatar.Image size={80} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/I_See_You.jpg/1280px-I_See_You.jpg'}}/>}
                    />
                    <Divider/>
                    <List.Item
                        title="kumbuk"
                        description="Terminalia arjuna"
                        left={props => <Avatar.Image size={80} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Fruit_I_IMG_9577.jpg'}}/>}
                    />
                    <Divider/>
                    <List.Item
                        title="green panic grass"
                        description="Megathyrsus maximus"
                        left={props => <Avatar.Image size={80} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Megathyrsus_maximus_whole4_%287370586296%29.jpg/800px-Megathyrsus_maximus_whole4_%287370586296%29.jpg'}}/>}
                    />
                    <Divider/>
                    
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
        height: 270
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
export default ParkDetails;