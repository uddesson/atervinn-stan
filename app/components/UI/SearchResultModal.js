import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import { utilityStyles } from './utilityStyles';
import { colors } from './colors';
import { SubHeading, Paragraph, ParagraphBold } from './Types';

export class SearchResultModal extends Component {
  state = {
    isVisible: false,
  };

  handleModal = visibility => {
    this.setState({ isVisible: visibility });
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity>
          <Text onPress={() => this.handleModal(true)}>Öppna modal</Text>
        </TouchableOpacity>

        <Modal visible={this.state.isVisible} style={styles.modal}>
          <SubHeading style={styles.subheading}>
            Namn på det klickade listobjektet
          </SubHeading>
          <Paragraph>Detta ska sorteras som</Paragraph>
          <Image style={{ width: 50, height: 50 }} source={{ uri: 'plast' }} />
          <TouchableOpacity onPress={() => this.handleModal(false)}>
            <Text>Stäng</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
  },
  modal: {
    height: '80%',
    width: '80%',
    margin: 10,
  },
  subheading: {
    paddingTop: 20,
  },
});
