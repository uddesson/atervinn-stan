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
    <View style={styles.wrapper}>
      <Modal visible={isVisible} transparent={true}>
        <View style={styles.wrapper}>
          <SubHeading style={styles.subheading}>
            Namn på det klickade listobjektet
          </SubHeading>
          <Paragraph>Detta ska sorteras som</Paragraph>
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
    margin: 10,
  },
  modal: {
    margin: 100,
    color: 'red',
  },
  subheading: {
    paddingTop: 20,
  },
});
