import * as React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import {TileComponent} from '../../components/TileCompoent/TileComponent'
import {ScrollView} from 'react-native-gesture-handler'
import { Avatar, Button} from 'react-native-paper';
class ParkScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Sri Lankan National Parks",
            headerStyle: {
                backgroundColor: '#4b8b3b',
            },
            headerTintColor: 'white',
            headerRight: () => <Button onPress={() => navigation.navigate('Profile')} mode='contained' style={{ marginRight: 5 }}>Profle</Button>
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ width: Dimensions.get('window').width }}>
                <View style={{flexDirection: 'row', flexWrap: 'wrap',}}>
                <TileComponent 
                    img={'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6a/e4/e6.jpg?fit=crop&w=320&h=140'}
                    title={'Udawalawa National Park'}
                    subtitle={'Udawalawa,  Sri Lanka'}
                    width={1.02}
                    next={this.props.navigation}
                />
                <TileComponent 
                    img={'https://images.thrillophilia.com/image/upload/s--ZLP8UoiG--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/053/505/original/1558512267_elephants-murchison.jpg.jpg?1558512267'}
                    title={'Yala National Park'}
                    subtitle={'Yala, Sri Lanka'}
                    width={2.1}
                    next={this.props.navigation}
                />
                <TileComponent 
                    img={'https://media-cdn.tripadvisor.com/media/photo-s/0d/51/3a/2e/birds-at-kumana.jpg'}
                    title={'Kumana National Park'}
                    subtitle={'Kumana, Sri Lanka'}
                    width={2.1}
                    next={this.props.navigation}
                />
                <TileComponent 
                    img={'https://www.srilankansafari.com/images/national-parks-and-nature-reserves-in-sri-lanka/wilpattu-national-park-in-sri-lanka/wilpattu-national-park-in-sri-lanka.jpg'}
                    title={'Wilpattu National Park'}
                    subtitle={'Willpattu, Sri Lanka'}
                    width={1.02}
                    next={this.props.navigation}
                />
                <TileComponent 
                    img={'https://www.swantour.com/blogs/wp-content/uploads/2019/03/Wasgamuwa-National-Park.jpg'}
                    title={'Wasgamuwa National Park'}
                    subtitle={'Wasgamuwa, Sri Lanka'}
                    width={2.1}
                    next={this.props.navigation}
                />
                <TileComponent 
                    img={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Wildlife_Preserve_Near_Kirinda%2C_Sri_Lanka.jpg/1280px-Wildlife_Preserve_Near_Kirinda%2C_Sri_Lanka.jpg'}
                    title={'Bundala National Park'}
                    subtitle={'Bundala, Sri Lanka'}
                    width={2.1}
                    next={this.props.navigation}
                />
                <TileComponent 
                    img={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Wild_horses_%28Delft_Island%29.JPG/1280px-Wild_horses_%28Delft_Island%29.JPG'}
                    title={'Delft'}
                    subtitle={'Delft, Sri Lanka'}
                    width={2.1}
                    next={this.props.navigation}
                />
                <TileComponent 
                    img={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Adam%27s_Bridge_-_Mannar_-_Sri_Lanka_%2828605256837%29.jpg/1280px-Adam%27s_Bridge_-_Mannar_-_Sri_Lanka_%2828605256837%29.jpg'}
                    title={'Adam’s Bridge'}
                    subtitle={'Adam’s Bridge, Sri Lanka'}
                    width={2.1}
                    next={this.props.navigation}
                />
                
                </View>
                
                
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
        width: Dimensions.get('window').width,
    },
})
export default ParkScreen;