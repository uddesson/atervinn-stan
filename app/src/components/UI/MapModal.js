//@flow
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { toUpperCase, parseArray, checkModuleAvailability } from '../../utils';
import { colors, utilityStyles, SubHeading, Paragraph, ParagraphBold } from '.';

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
  const locationNotConfirmed = marker.locationConfirmed === false;
  const isModuleAvailable = checkModuleAvailability();

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

    if (!ftiStation && !isModuleAvailable) {
      return (backgroundColor = colors.lightGrey);
    } else if (locationNotConfirmed) {
      return (backgroundColor = colors.orange);
    } else if (ftiStation) {
      return (backgroundColor = colors.ftiContainerGreen);
    } else {
      return (backgroundColor = colors.blue);
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
        {locationNotConfirmed && (
          <ParagraphBold style={styles.finePrint}>
            {`* På grund av otillräcklig information kan vi inte garantera exakt placering för den här modulen.`}
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
    fontSize: 12,
    color: colors.orange,
  },
});
