//@flow
import React, { Component } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { calcColor, toUpperCase, parseArray } from '../../utils';
import {
  colors,
  utilityStyles,
  SubHeading,
  Paragraph,
  ParagraphBold,
  CancelIcon,
  SuccessIcon,
  WarningIcon,
} from '.';

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
  const backgroundColor = locationNotConfirmed
    ? colors.orange
    : ftiStation
    ? colors.ftiContainerGreen
    : colors.blue;

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
