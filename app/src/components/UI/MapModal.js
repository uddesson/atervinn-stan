//@flow
import React, { Component } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from './colors';
import { utilityStyles } from './utilityStyles';
import { SubHeading, Paragraph, ParagraphBold } from './Types';
import { CancelIcon, SuccessIcon, WarningIcon } from './Icons';
import { calcColor, toUpperCase, parseArray } from '../../utils';

type Props = {
  visible: boolean,
  onPress: () => void,
  marker: {
    locationName: string,
    sorting: string[],
    locationConfirmed?: boolean,
    sortingConfirmed?: boolean,
  },
};

export const MapModal = (props: Props) => {
  const { visible, onPress, marker } = props;

  // returns circles with color symbolizing the sortingtype
  const sortingSymbols = marker.sorting.map(option => {
    const backgroundColor = calcColor(option);
    return <View key={option} style={[styles.circle, { backgroundColor }]} />;
  });

  const sortingOptions = parseArray(marker.sorting);
  const formattedSortingOptions = toUpperCase(sortingOptions);

  const backgroundColor =
    (marker.hasOwnProperty('locationConfirmed') && marker.locationConfirmed) ||
    sortingOptions.length > 0
      ? colors.blue
      : colors.red;

  return (
    <View style={[utilityStyles.flex1, utilityStyles.justifyCenter]}>
      <Modal visible={visible} transparent={true} animationType={'none'}>
        <View style={[utilityStyles.flex1, utilityStyles.center]}>
          <View style={styles.modalContent}>
            <View
              style={[
                styles.modalHeader,
                utilityStyles.row,
                { backgroundColor },
              ]}
            >
              <SubHeading
                style={[utilityStyles.capitalizeText, utilityStyles.whiteText]}
              >
                {marker.locationName}
              </SubHeading>
              {/* TODO: user should also be able to close by press on map */}
              <TouchableOpacity onPress={() => onPress()} style={styles.button}>
                <CancelIcon width={20} height={20} fill={colors.white} />
              </TouchableOpacity>
            </View>

            <View style={styles.modalInner}>
              {/* fti-positions don't have this flag so we want don't to check this
                if we don't we will get a negative false  */}
              {marker.hasOwnProperty('locationConfirmed') ? (
                marker.locationConfirmed ? null : (
                  <View style={utilityStyles.row}>
                    <Paragraph>Stationens position är ej bekräftad.</Paragraph>
                    <WarningIcon width={20} height={20} fill={colors.red} />
                  </View>
                )
              ) : null}

              {sortingOptions.length > 0 ? (
                <View style={utilityStyles.lineHeightNormal}>
                  <ParagraphBold>Här kan du återvinna:</ParagraphBold>
                  <View style={utilityStyles.col}>
                    <View style={utilityStyles.row}>
                      <Paragraph>{formattedSortingOptions}</Paragraph>
                    </View>
                    <View style={[utilityStyles.row, styles.sortingSymbols]}>
                      {sortingSymbols}
                    </View>
                  </View>
                </View>
              ) : (
                <Paragraph>Sorteringsalternativ är ej bekräftade.</Paragraph>
              )}

              {marker.hasOwnProperty('locationConfirmed') ? (
                !marker.locationConfirmed || !marker.sortingConfirmed ? (
                  <ParagraphBold style={styles.finePrint}>
                    *På grund av otillräcklig information kan inte modulens
                    plats/sorteringsalternativ garanteras.
                  </ParagraphBold>
                ) : null
              ) : null}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: colors.white,
    shadowColor: colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.8,
    maxHeight: 500,
    width: '90%',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  modalHeader: {
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
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
    color: colors.red,
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
