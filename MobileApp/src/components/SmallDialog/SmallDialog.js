import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph,Avatar, Dialog, Portal } from 'react-native-paper';

export class SmallDialog extends React.Component {
  state = {
    visible: true,
  };

//   _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => {
        this.props.parentCallback(false)
        this.setState({ visible: false });
  } 

  render() {
    return (
      <View>
        <Portal>
          <Dialog
             visible={this.props.sDialogVisible}
             onDismiss={this._hideDialog}>
            <Dialog.Title>{this.props.title}</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{this.props.content}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button style={{backgroundColor: '#014421'}} mode='outlined' onPress={this._hideDialog}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  }
}