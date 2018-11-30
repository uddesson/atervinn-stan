//@flow

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  utilityStyles,
  colors,
  Paragraph,
  ParagraphBold,
  SubHeading,
  GpsIcon,
} from '../components/UI';
import { toUpperCase } from '../utils';

type Props = {
  navigation: NavigationScreenProps,
};

export const SearchModal = (props: Props) => {
  const { navigation } = props;
  const title = toUpperCase(navigation.getParam('title'));
  const category = navigation.getParam('category');
  const iconCode = navigation.getParam('iconCode');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[utilityStyles.justifyBetween, utilityStyles.flex1]}>
        <View>
          <View style={[utilityStyles.row, utilityStyles.justifyBetween]}>
            <SubHeading
              style={[styles.subheading, utilityStyles.capitalizeText]}
            >
              {title}
            </SubHeading>
            {/* TODO: add image for 'övrigt avfall' */}
            <Image style={styles.image} source={{ uri: iconCode }} />
          </View>
          <Paragraph style={styles.paragraph}>
            {title} kan återvinnas i stan. Sorteras som {category}
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            {title} Kan både återvinnas på en FTI-station eller
            återvinningsmodul.
          </Paragraph>
        </View>
        <TouchableOpacity
          style={[styles.button, utilityStyles.row]}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Home')}
        >
          <ParagraphBold style={[utilityStyles.whiteText, styles.buttonText]}>
            Hitta närmsta återvinningskärl
          </ParagraphBold>
          <GpsIcon height={20} width={20} fill={colors.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    height: '90%',
  },
  subheading: {
    color: colors.darkGreen,
    alignSelf: 'flex-end',
  },
  image: {
    width: 60,
    height: 60,
  },
  paragraph: {
    marginTop: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.darkGreen,
    backgroundColor: colors.darkGreen,
    borderRadius: 5,
    padding: 5,
    marginTop: 15,
  },
  buttonText: {
    marginRight: 10,
  },
});
