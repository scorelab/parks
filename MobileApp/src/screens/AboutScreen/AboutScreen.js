import * as React from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  Linking,
  ImageBackground,
} from 'react-native';
import {Divider} from 'react-native-paper';
import {SLOGO, COVER, LOGO} from '../../images/index';

class AboutScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'About Sri Lankan Wild Life Park App',
      headerStyle: {
        backgroundColor: '#014421',
      },
      headerTintColor: 'white',
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={COVER} style={styles.imgConatiner}>
          <Image style={styles.logo} source={LOGO} />
          <Text style={styles.bigText}> Developed By</Text>
          <View style={styles.cmpLogoCntner}>
            <Image style={styles.companyLogos} source={SLOGO} />
          </View>
          <Divider />
          <View style={styles.info}>
            <Text style={styles.paragraph}>
              This app is developed by ScoreLab origanization with the
              collaboration of Department of Wild Life Conservation-Sri Lanka
              for animal conservation purposes.{'\n'}
              {'\n'}
              For more information contact us:
              <Text
                style={{fontStyle: 'italic'}}
                onPress={() => Linking.openURL('https://mail.google.com')}>
                {' '}
                elly@scorelab.org
              </Text>
              {'\n'}
              {'\n'}
              <Text onPress={() => Linking.openURL('http://www.scorelab.org/')}>
                Visits http://www.scorelab.org/
              </Text>
              {'\n'}
            </Text>
          </View>
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
    width: Dimensions.get('window').width,
  },
  logo: {
    width: 90,
    height: 90,
    margin: 10,
    resizeMode: 'stretch',
  },
  bigText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  companyLogos: {
    width: 200,
    height: 100,
    resizeMode: 'stretch',
    borderRadius: 20,
  },
  cmpLogoCntner: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    marginTop: 20,
    padding: 0,
  },
  paragraph: {
    textAlign: 'justify',
    color: 'black',
    fontSize: 17,
    margin: 5,
    fontWeight: '100',
    padding: 10,
  },
  imgConatiner: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
});
export default AboutScreen;
