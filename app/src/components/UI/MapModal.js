//@flow
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { toUpperCase, parseArray, checkModuleAvailability } from '../../utils';
import { colors, utilityStyles, SubHeading, Paragraph, ParagraphBold } from '.';

/*
 * Note: if two markers are close to each other both modals will be triggered.
 * This is a known issue and there is no good fix for this right now.
 *
 * Ref: https://github.com/react-native-community/react-native-maps/issues/2492
 */

type Props = {
  marker: {
    locationName: string,
    sorting: string[],
    locationConfirmed?: boolean,
  },
};

export const MapModal = (props: Props) => {
  const { marker } = props;
  const sortingOptions = parseArray(marker.sorting);
  const formattedSortingOptions = toUpperCase(sortingOptions);
  const locationConfirmed = marker.locationConfirmed === true;
  const moduleIsAvailable = checkModuleAvailability();

  // Info message should be shown if either the location is unconfirmed or module is unavailable.
  const showInfoMessage = !locationConfirmed || !moduleIsAvailable;

  /*
   * Since we our data for the two different stations are very similar
   * we don't have a better way of seperating them without adding
   * more data
   */
  const ftiStation = marker.locationConfirmed === undefined;

  /*
   * Render different color on modal header depending on type of
   * of station, if its position is not confirmed and if the module
   * isnt out.
   */
  const getBackgroundColor = () => {
    let backgroundColor = '';

    if (!ftiStation) {
      if (!moduleIsAvailable) {
        return (backgroundColor = colors.lightGrey);
      } else if (!locationConfirmed) {
        return (backgroundColor = colors.orange);
      }
      return (backgroundColor = colors.blue);
    } else {
      return (backgroundColor = colors.ftiContainerGreen);
    }
  };

  const backgroundColor = getBackgroundColor();

  return (
    <View style={styles.container}>
      <View style={[styles.modalHeader, { backgroundColor }]}>
        <SubHeading
          style={[
            utilityStyles.capitalizeText,
            utilityStyles.whiteText,
            styles.locationName,
          ]}
        >
          {marker.locationName}
        </SubHeading>
      </View>

      <View style={styles.modalInner}>
        <ParagraphBold>Här kan du återvinna:</ParagraphBold>
        <View style={utilityStyles.col}>
          <View style={utilityStyles.row}>
            <Paragraph>{formattedSortingOptions}</Paragraph>
          </View>
        </View>
        {!ftiStation && showInfoMessage && (
          <ParagraphBold style={styles.finePrint}>
            {!moduleIsAvailable
              ? 'Stationen är endast tillgänglig 1 April - 31 Oktober.'
              : !locationConfirmed
              ? 'På grund av otillräcklig information kan vi inte garantera exakt placering eller sorteringsalternativ för den här modulen.'
              : null}
          </ParagraphBold>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: -12,
    width: 250,
    backgroundColor: colors.white,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  modalHeader: {
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  locationName: {
    fontSize: 18,
    fontWeight: '700',
  },
  modalInner: {
    padding: 10,
  },
  finePrint: {
    paddingTop: 10,
    fontSize: 12,
    color: colors.orange,
  },
});
