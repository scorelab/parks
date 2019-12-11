import * as React from 'react';
import { View, StyleSheet, ScrollView, RefreshControl, TouchableOpacity, Text, Image, Dimensions } from 'react-native'
import { Searchbar, Chip } from 'react-native-paper';
import { generateResult } from '../../components/UserDataHandling/UserDataHandling'
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator'
import database from '@react-native-firebase/database';
class SearchScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstQuery: '',
            observations: []
        }
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {

            headerStyle: {
                backgroundColor: '#4b8b3b',
            },
            headerTintColor: 'white',
            headerRight: () => <Searchbar
                placeholder="Search"
                style={{ width: Dimensions.get('window').width - 10, margin: 5 }}
                onChangeText={(query) => params.handleText(query)}
                value={params.query}
            />,

        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            handleText: (text) => this.onTextChangeHandler(text),
            query: this.state.firstQuery
        });
        // database().ref('/users/').on("value", snapshot=>{
        //     this.getObservations('all')
        // })
        this.getObservations('all')
    }

    onTextChangeHandler = (text) => {
        this.setState({
            firstQuery: text
        })
        this.getObservations(text.toLowerCase())
        this.props.navigation.setParams({
            query: text
        });
    }

    getObservations = async function (type) {
        // Fetch the data snapshot
        const data = await database().ref(`/usersObservations/`).once('value')
        console.log(data)
        const val = data.val()

        let observations = []
        console.log(val[0])
        for (let i in val) {
            console.log(val[i].address)
            let name = val[i].uname
            let photo = val[i].uimg
            let userNick = name.toLowerCase().replace(/ /g, '')
            let time = new Date(val[i].time)
            let crntTime = new Date().getTime()
            let dif = crntTime - time
            if (dif <= 604800000) { continue }
            let photUrl = val[i].photoURL
            let location = val[i].location
            time = time.toString().split(" ")
            time = time.splice(0, time.length - 1)
            time = time.toString().replace(/,/g, ' ')
            let result = [[]]
            let address = val[i].address
            console.log(observations)
            observations.push([name, photo, photUrl, location, time, userNick, result, address])
            await this.setState({
                observations: observations,
                activityIndicator: false
            })
        }
        await this.setState({
            activityIndicator: false
        })
    }

    _onRefresh() {
        this.setState({ refreshing: true });
        this.getObservations('all').then(() => {
            this.setState({ refreshing: false });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.activityIndicator ?
                    <View style={{ width: "100%", backgroundColor: 'grey' }}>
                        <ActivityIndicator title={"Please wait"} showIndicator={this.state.activityIndicator} />
                    </View>
                    :
                    <View>
                        <View style={styles.chipContainer}>
                            <Chip style={styles.chip} icon="information" onPress={() => this.getObservations('all')}>All</Chip>
                            <Chip style={styles.chip} icon="information" onPress={() => this.getObservations('male')}>Male</Chip>
                            <Chip style={styles.chip} icon="information" onPress={() => this.getObservations('female')}>Female</Chip>
                            <Chip style={styles.chip} icon="information" onPress={() => this.getObservations('die')}>Dead</Chip>
                            <Chip style={styles.chip} icon="information" onPress={() => this.getObservations('group')}>Groups</Chip>
                            <Chip style={styles.chip} icon="information" onPress={() => this.getObservations('single')}>Single</Chip>

                        </View>
                        <ScrollView
                            style={styles.scrollView}
                            refreshControl={<RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                                colors={['#4b8b3b']}
                                title={'Fetching...'}
                            />}
                        >
                            <View style={styles.imgConatiner}>
                                {this.state.observations.length > 0 ?
                                    this.state.observations.map((val, i) => {
                                        return (
                                            <TouchableOpacity
                                                key={i}
                                                onPress={() => this.props.navigation.navigate('showDetailedPhoto',
                                                    {
                                                        img: val[2],
                                                        title: val[0],
                                                        subtitle: val[5],
                                                        user: val[1],
                                                        content: val[6],
                                                        showPhoto: this.props.navigation
                                                    }
                                                )}
                                            >
                                                <Image style={styles.img} source={{ uri: val[2] }} />
                                            </TouchableOpacity>
                                        )

                                    })
                                    :
                                    <Text style={{ fontSize: 20, color: 'grey' }}>Sorry! We couldn't find anything</Text>
                                }
                            </View>
                        </ScrollView>
                    </View>
                }

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
        marginTop: 10,
        width: Dimensions.get('window').width
    },
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chip: {
        margin: 2
    },
    img: {
        width: Dimensions.get('window').width / 3.2,
        height: Dimensions.get('window').width / 3.5,
        borderWidth: 2,
        margin: 2
    },
    imgConatiner: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: Dimensions.get('window').width
    },
    scrollView: {
        width: Dimensions.get('window').width
    },
    welcome: {
        fontSize: 25
    }
})
export default SearchScreen;

