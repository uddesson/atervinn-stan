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
  WarningIcon,
} from '../components/UI';
import { toUpperCase, allSortingTypes, getSearchModalMessage } from '../utils';
import { moduleSorting, ftiStationSorting } from '../utils/sortingTypes';

type Props = {
  navigation: NavigationScreenProps,
};

export const SearchModal = (props: Props) => {
  const { navigation } = props;
  const title = toUpperCase(navigation.getParam('title'));
  const sortingType = navigation.getParam('sortingType').toLowerCase();
  const sortingAvailability = allSortingTypes.includes(sortingType);
  const message = getSearchModalMessage(sortingType, title);
  // url to list of recyclingcentrals in stockholm on SVOA's webpage
  const externalUrl = 'https://tinyurl.com/y9sast9a';

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[utilityStyles.justifyBetween, utilityStyles.flex1]}>
        <View>
          {sortingAvailability ? (
            <>
              <View style={[utilityStyles.center, styles.imageContainer]}>
                <Image style={styles.image} source={{ uri: sortingType }} />
              </View>
              <SubHeading>{toUpperCase(title)}</SubHeading>
            </>
          ) : (
            <View style={utilityStyles.row}>
              <SubHeading>{toUpperCase(title)}</SubHeading>
              <View style={[utilityStyles.center, styles.iconCircle]}>
                <WarningIcon width={20} height={20} fill={colors.red} />
              </View>
            </View>
          )}

          <Paragraph style={[styles.paragraph, utilityStyles.lineHeightNormal]}>
            {`${message}.`}
          </Paragraph>
        </View>

        <TouchableOpacity
          style={[styles.button, utilityStyles.row, utilityStyles.center]}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Map')}
        >
          {sortingAvailability ? (
            <>
              <ParagraphBold
                style={[utilityStyles.whiteText, utilityStyles.uppercaseText]}
              >
                Hitta station
              </ParagraphBold>
              <GpsIcon height={50} width={50} fill={colors.white} />
            </>
          ) : (
            <>
              <ExternalLink url={externalUrl} style={styles.button}>
                <ParagraphBold
                  style={[
                    utilityStyles.whiteText,
                    utilityStyles.uppercaseText,
                    styles.buttonText,
                  ]}
                >
                  Hitta central
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
  iconCircle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 2,
    borderColor: colors.red,
    marginLeft: 10,
  },
  paragraph: {
    marginTop: 5,
  },
  button: {
    backgroundColor: colors.darkGreen,
    borderRadius: 5,
    padding: 15,
    width: '100%',
    height: 50,
  },
  buttonText: {
    marginRight: 10,
  },
});
