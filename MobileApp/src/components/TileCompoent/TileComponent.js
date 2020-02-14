import * as React from 'react';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';
import {Card} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class TileComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableNativeFeedback
        onPress={() =>
          this.props.next.navigate('ParkDetails', {
            img: this.props.img,
            title: this.props.title,
            subtitle: this.props.subtitle,
            code: this.props.code,
          })
        }>
        <Card style={[styles.container, {width: wp(this.props.width)}]}>
          <TouchableOpacity>
            <Card.Cover style={styles.cover} source={{uri: this.props.img}} />
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
    backgroundColor: '#F0FFFF',
    borderRadius: 10,
  },
  cover: {
    height: 180,
    backgroundColor: '#F0FFFF',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  content: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  title: {
    flexWrap: 'wrap',
  },
});

export {TileComponent};
