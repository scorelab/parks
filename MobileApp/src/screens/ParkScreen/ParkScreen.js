import * as React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {TileComponent} from '../../components/TileCompoent/TileComponent';
import {ScrollView} from 'react-native-gesture-handler';
import {Avatar, Button} from 'react-native-paper';
class ParkScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Sri Lankan Wild Life Parks',
      headerStyle: {
        backgroundColor: '#014421',
      },
      headerTintColor: 'white',
      // headerRight: () => (
      //   <Button
      //     onPress={() => navigation.navigate('Profile')}
      //     mode="contained"
      //     style={{marginRight: 5}}>
      //     Profle
      //   </Button>
      // ),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{width: Dimensions.get('window').width}}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            <TileComponent
              img={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Parc_national_de_Uda_Walawa_Sri-Lanka_%284%29.jpg/1280px-Parc_national_de_Uda_Walawa_Sri-Lanka_%284%29.jpg'
              }
              title={'Udawalawa National Park'}
              subtitle={'Udawalawa,  Sri Lanka'}
              code={'unp'}
              width={'96.5%'}
              next={this.props.navigation}
            />
            <TileComponent
              img={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Yala_Beach.jpg/1920px-Yala_Beach.jpg'
              }
              title={'Yala National Park'}
              subtitle={'Yala, Sri Lanka'}
              code={'ynp'}
              width={'47%'}
              next={this.props.navigation}
            />
            <TileComponent
              img={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Kumana_National_Park_%28Kudumbigala_Sanctuary%29.JPG/1280px-Kumana_National_Park_%28Kudumbigala_Sanctuary%29.JPG'
              }
              title={'Kumana National Park'}
              subtitle={'Kumana, Sri Lanka'}
              code={'knp'}
              width={'47%'}
              next={this.props.navigation}
            />
            <TileComponent
              img={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/WilpattuNationalPark-April2014_%283%29.JPG/1920px-WilpattuNationalPark-April2014_%283%29.JPG'
              }
              title={'Wilpattu National Park'}
              subtitle={'Willpattu, Sri Lanka'}
              code={'wnp'}
              width={'96.5%'}
              next={this.props.navigation}
            />
            <TileComponent
              img={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/WasgamuwaNationalPark-September2014_%281%29.JPG/1920px-WasgamuwaNationalPark-September2014_%281%29.JPG'
              }
              title={'Wasgamuwa National Park'}
              subtitle={'Wasgamuwa, Sri Lanka'}
              code={'wnp'}
              width={'47%'}
              next={this.props.navigation}
            />
            <TileComponent
              img={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Wildlife_Preserve_Near_Kirinda%2C_Sri_Lanka.jpg/284px-Wildlife_Preserve_Near_Kirinda%2C_Sri_Lanka.jpg'
              }
              title={'Bundala National Park'}
              subtitle={'Bundala, Sri Lanka'}
              code={'bnp'}
              width={'47%'}
              next={this.props.navigation}
            />
            <TileComponent
              img={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Wild_horses_%28Delft_Island%29.JPG/1280px-Wild_horses_%28Delft_Island%29.JPG'
              }
              title={'Delft'}
              subtitle={'Delft, Sri Lanka'}
              code={'dnp'}
              width={'47%'}
              next={this.props.navigation}
            />
            <TileComponent
              img={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Adams_Bridge_aerial.jpg/800px-Adams_Bridge_aerial.jpg'
              }
              title={'Adam’s Bridge'}
              subtitle={'Adam’s Bridge, Sri Lanka'}
              code={'anp'}
              width={'47%'}
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
});
export default ParkScreen;
