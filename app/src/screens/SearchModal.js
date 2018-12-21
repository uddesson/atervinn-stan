//@flow
import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  utilityStyles,
  colors,
  Paragraph,
  ButtonLabel,
  Heading,
  WarningIcon,
  Button,
  ExternalLinkButton,
  NavigationIcon,
  ExternalLink,
  ExternalLinkIcon,
} from '../components/UI';
import { toUpperCase, getSearchModalMessage } from '../utils';
import { moduleSorting, ftiStationSorting, allSortingTypes } from '../assets';

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
    <View style={[styles.screen, utilityStyles.flexGrow]}>
      <ScrollView
        contentContainerStyle={[
          utilityStyles.flexGrow,
          utilityStyles.justifyBetween,
          styles.container,
        ]}
      >
        <View>
          {sortingAvailability ? (
            <>
              <View style={[utilityStyles.center, styles.imageContainer]}>
                <Image style={styles.image} source={{ uri: sortingType }} />
              </View>
              <Heading
                style={[
                  utilityStyles.boldText,
                  utilityStyles.letterSpaceNormal,
                ]}
              >
                {toUpperCase(title)}
              </Heading>
            </>
          ) : (
            <View style={[utilityStyles.row, styles.unavailableItem]}>
              <Heading
                style={[
                  utilityStyles.boldText,
                  utilityStyles.letterSpaceNormal,
                ]}
              >
                {toUpperCase(title)}
              </Heading>
              <View style={[utilityStyles.center, styles.iconCircle]}>
                <WarningIcon width={20} height={20} fill={colors.red} />
              </View>
            </View>
          )}

          <Paragraph style={[styles.paragraph, utilityStyles.lineHeightNormal]}>
            {message}
          </Paragraph>
        </View>

        <View>
          {sortingAvailability ? (
            <Button onPress={() => navigation.navigate('Map')}>
              <ButtonLabel style={styles.buttonLabel}>
                hitta närmsta
              </ButtonLabel>
              <NavigationIcon height={25} width={25} fill={colors.white} />
            </Button>
          ) : (
            <ExternalLinkButton url={externalUrl}>
              <ButtonLabel style={styles.buttonLabel}>
                visa centraler
              </ButtonLabel>
              <ExternalLinkIcon height={25} width={25} fill={colors.white} />
            </ExternalLinkButton>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.whiteSmoke,
  },
  container: {
    backgroundColor: colors.whiteSmoke,
    paddingHorizontal: '10%',
    paddingBottom: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  unavailableItem: {
    marginTop: 20,
  },
  image: {
    width: 190,
    height: 190,
    marginBottom: 10,
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
    marginBottom: 20,
    marginTop: 10,
  },
  buttonLabel: {
    marginRight: 10,
  },
});
