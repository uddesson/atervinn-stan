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
    sortingConfirmed?: boolean,
    locationConfirmed?: boolean,
  },
};

export const MapModal = (props: Props) => {
  const { marker } = props;

  // returns circles with color symbolizing the sortingtype
  const sortingSymbols = marker.sorting.map(sortingType => {
    const backgroundColor = calcColor(sortingType);
    return <View key={sortingType} style={[styles.circle, { backgroundColor }]} />;
  });

  const sortingNotConfirmed = marker.sortingConfirmed === false || undefined;
  const locationNotConfirmed = marker.locationConfirmed === false || undefined;
  const informationNotConfirmed = sortingNotConfirmed || locationNotConfirmed;

  const sortingOptions = parseArray(marker.sorting);
  const formattedSortingOptions = toUpperCase(sortingOptions);

  const backgroundColor = informationNotConfirmed ? colors.orange : colors.blue;

  return (
    <View style={styles.container}>
      <View style={[styles.modalHeader, { backgroundColor }]}>
        <SubHeading
          style={[utilityStyles.capitalizeText, utilityStyles.whiteText, styles.locationName]}
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
