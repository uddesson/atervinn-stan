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

export const SearchResultModal = props => {
  const { isVisible, handleModal } = props;
  return (
    <View>
      <Modal
        visible={isVisible}
        transparent={true}
        backdropColor="black"
        style={styles.modal}
      >
        <View style={styles.wrapper}>
          <SubHeading style={styles.subheading}>Plastbestick</SubHeading>
          <Paragraph>Detta ska sorteras som plast.</Paragraph>
          <Image style={{ width: 50, height: 50 }} source={{ uri: 'plast' }} />
          <TouchableOpacity onPress={() => handleModal(false)}>
            <Text>Stäng</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  subheading: {
    paddingTop: 10,
  },
});
