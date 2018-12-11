//@flow
import React, { Component } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from './colors';
import { utilityStyles } from './utilityStyles';
import { SubHeading, Paragraph, ParagraphBold } from './Types';
import { CancelIcon, SuccessIcon, WarningIcon } from './Icons';
import { getColor, toUpperCase, parseArray } from '../../utils';

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
  const sortingSymbols = marker.sorting.map(option => {
    const backgroundColor = getColor(option);
    return <View key={option} style={[styles.circle, { backgroundColor }]} />;
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
          <View style={[utilityStyles.row, styles.sortingSymbols]}>{sortingSymbols}</View>
        </View>
        {informationNotConfirmed && (
          <ParagraphBold style={styles.finePrint}>
            {`* På grund av otillräcklig information kan vi inte garantera exakt placering eller sorteringsalternativ för den här modulen.`}
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
  button: {
    marginLeft: 'auto',
    alignSelf: 'flex-start',
  },
  finePrint: {
    fontSize: 12,
    color: colors.orange,
  },
  sortingSymbols: {
    marginTop: 10,
    marginBottom: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
});
