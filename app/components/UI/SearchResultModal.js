import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  Text,
} from 'react-native';
import { utilityStyles } from './utilityStyles';
import { colors } from './colors';
import { SubHeading, Paragraph } from './Types';

export const SearchResultModal = props => {
  const { isVisible, handleModal } = props;
  return (
    <View>
      <Modal visible={isVisible} transparent={true}>
        <View style={styles.wrapper}>
          <View style={[utilityStyles.row, utilityStyles.justifyBetween]}>
            <SubHeading style={styles.subheading}>Plastbestick</SubHeading>
            <Image style={styles.image} source={{ uri: 'plast' }} />
          </View>
          <Paragraph style={styles.paragraph}>
            Plastbestick kan återvinnas i stan. Sorteras som plast.
          </Paragraph>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => handleModal(false)}
          >
            <Text style={utilityStyles.whiteText}>Stäng</Text>
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
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.lightGrey,
    shadowColor: colors.lightGrey,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  subheading: {
    color: colors.greenDark,
  },
  image: {
    width: 40,
    height: 40,
  },
  paragraph: {
    marginTop: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.green,
    backgroundColor: colors.green,
    borderRadius: 5,
    padding: 5,
    marginTop: 15,
    width: 50,
  },
});
