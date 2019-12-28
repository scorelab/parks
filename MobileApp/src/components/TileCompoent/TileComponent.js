import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableNativeFeedback } from 'react-native'
import { Card, Text, Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


class TileComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={() => this.props.next.navigate('ParkDetails',
                    {
                        img: this.props.img,
                        title: this.props.title,
                        subtitle: this.props.subtitle,
                    }
                )
                }
            >
                
            <Card style={[styles.container, {width: Dimensions.get('window').width/this.props.width}]}>
                
                <TouchableOpacity>
                    <Card.Cover style={styles.cover} source={{ uri: this.props.img }} />
                </TouchableOpacity>
                
                <Card.Title
                    style={styles.title}
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    //left={() => <Avatar.Image size={40} source={{ uri: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/b6/41.jpg' }} />}
                />
            </Card>
        </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#F0FFFF'
    },
    cover: {
        height: 180
    },
    content: {
        marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    title: {
        flexWrap: 'wrap'
    }
})

export { TileComponent };

