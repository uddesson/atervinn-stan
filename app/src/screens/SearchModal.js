//@flow
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  utilityStyles,
  colors,
  Paragraph,
  ButtonLabel,
  SubHeading,
  WarningIcon,
  Button,
  GpsIcon,
  ExternalLink,
  ExternalLinkIcon,
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
  const message = getSearchModalMessage(sortingType);
  // url to list of recyclingcentrals in stockholm on SVOA's webpage
  const externalUrl = 'https://tinyurl.com/y9sast9a';

  return (
    <SafeAreaView style={[utilityStyles.fullHeight, styles.container]}>
      <View
        style={[
          utilityStyles.justifyBetween,
          utilityStyles.flex1,
          styles.innerContainer,
        ]}
      >
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

        {sortingAvailability ? (
          <Button onPress={() => navigation.navigate('Map')}>
            <ButtonLabel>Hitta station</ButtonLabel>
            <GpsIcon height={60} width={60} fill={colors.white} />
          </Button>
        ) : (
          <ExternalLink url={externalUrl}>
            <ButtonLabel>Hitta central</ButtonLabel>
            <ExternalLinkIcon height={25} width={25} fill={colors.white} />
          </ExternalLink>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteSmoke,
  },
  innerContainer: {
    margin: 30,
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
});
