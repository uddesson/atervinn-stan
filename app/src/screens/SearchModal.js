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
  ExternalLink,
  ExternalLinkIcon,
} from '../components/UI';
import { toUpperCase, getIconCode } from '../utils';

type Props = {
  navigation: NavigationScreenProps,
};

export const SearchModal = (props: Props) => {
  const { navigation } = props;

  const title = toUpperCase(navigation.getParam('title'));
  const sortingType = navigation.getParam('sortingType');
  const iconCode = getIconCode(sortingType);

  const messageIfAvailable = 'kan återvinnas i stan. Sorteras som';
  const messageIfUnavailable =
    'måste återvinnas på återvinningscentral och sorteras där som';

  const message =
    sortingType === 'farligt avfall'
      ? messageIfUnavailable
      : messageIfAvailable;

  // url to list of recyclingcentrals in stockholm on SVOA's webpage
  const externalUrl = 'https://tinyurl.com/y9sast9a';

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[utilityStyles.justifyBetween, utilityStyles.flex1]}>
        <View>
          <View style={[utilityStyles.center, styles.imageContainer]}>
            {sortingType !== 'farligt avfall' ? (
              <Image style={styles.image} source={{ uri: iconCode }} />
            ) : null}
          </View>

          <SubHeading style={utilityStyles.capitalizeText}>{title}</SubHeading>
          <Paragraph style={[styles.paragraph, utilityStyles.lineHeightNormal]}>
            {title + ' ' + message + ' ' + sortingType + '.'}
          </Paragraph>
          {sortingType !== 'farligt avfall' ? (
            <Paragraph
              style={[styles.paragraph, utilityStyles.lineHeightNormal]}
            >
              {title} Kan både återvinnas på en FTI-station eller
              återvinningsmodul.
            </Paragraph>
          ) : null}
        </View>

        <TouchableOpacity
          style={[styles.button, utilityStyles.row, utilityStyles.center]}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Home')}
        >
          {sortingType !== 'farligt avfall' ? (
            <>
              <ParagraphBold
                style={[
                  utilityStyles.whiteText,
                  styles.buttonText,
                  utilityStyles.uppercaseText,
                ]}
              >
                Hitta närmsta
              </ParagraphBold>
              <GpsIcon height={20} width={20} fill={colors.white} />
            </>
          ) : (
            <>
              <ExternalLink url={externalUrl}>
                <ParagraphBold
                  style={[
                    utilityStyles.whiteText,
                    utilityStyles.uppercaseText,
                    styles.buttonText,
                  ]}
                >
                  Hitta närmsta
                </ParagraphBold>
                <ExternalLinkIcon height={20} width={20} fill={colors.white} />
              </ExternalLink>
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '90%',
    margin: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 190,
    height: 190,
  },
  paragraph: {
    marginTop: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.darkGreen,
    backgroundColor: colors.darkGreen,
    borderRadius: 5,
    padding: 15,
    marginTop: 15,
  },
  buttonText: {
    marginRight: 10,
  },
});
