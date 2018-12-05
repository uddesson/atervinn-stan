//@flow
import React, { Component } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from './colors';
import { utilityStyles } from './utilityStyles';
import { SubHeading, Paragraph } from './Types';
import { CancelIcon, SuccessIcon, WarningIcon } from './Icons';

type Props = {
  visible: boolean,
  onPress: () => void,
  marker: {
    address?: string,
    stationName?: string,
    sorting: [],
    locationConfirmed?: boolean,
    sortingConfirmed?: boolean,
  },
};

export const MapModal = (props: Props) => {
  const { visible, onPress, marker } = props;
  // how should glass be rendered?
  const sortingOptions = marker.sorting.map(option => {
    return <Image key={option} style={styles.image} source={{ uri: option }} />;
  });

  return (
    <View style={styles.container}>
      <Modal visible={visible} transparent={true} animationType={'none'}>
        <View style={[utilityStyles.flex1, utilityStyles.center]}>
          <View style={styles.modalContent}>
            {/* should user also be able to press background to close? */}
            <TouchableOpacity onPress={onPress} style={styles.button}>
              <CancelIcon width={20} height={20} fill={colors.darkGreen} />
            </TouchableOpacity>

            <View
              style={[
                utilityStyles.justifyBetween,
                utilityStyles.col,
                utilityStyles.flex1,
              ]}
            >
              <View>
                <SubHeading style={utilityStyles.capitalizeText}>
                  {marker.address || marker.stationName}
                </SubHeading>
                {/* fti-positions don't have this flag so we want don't to check this
              if we don't we will get a negative false  */}
                {marker.hasOwnProperty('locationConfirmed') ? (
                  marker.locationConfirmed ? (
                    // is this implicit?
                    <View style={utilityStyles.row}>
                      <Paragraph>Bekräftad position</Paragraph>
                      <SuccessIcon width={20} height={20} fill={colors.green} />
                    </View>
                  ) : (
                    <View style={utilityStyles.row}>
                      <Paragraph>Ej bekräftad position</Paragraph>
                      <WarningIcon width={20} height={20} fill={colors.red} />
                    </View>
                  )
                ) : null}

                {sortingOptions.length > 0 ? (
                  <View>
                    <Paragraph>
                      Möjliga sorteringsalternativ på stationen
                    </Paragraph>
                    <View style={[utilityStyles.row, styles.imageWrapper]}>
                      {sortingOptions}
                    </View>
                  </View>
                ) : (
                  <Paragraph>Sorteringsalternativ är ej bekräftad</Paragraph>
                )}
              </View>

              {marker.hasOwnProperty('locationConfirmed') ? (
                !marker.locationConfirmed || !marker.sortingConfirmed ? (
                  <Paragraph style={styles.finePrint}>
                    På grund av otillräcklig information kan inte modulens
                    plats/sorteringsalternativ garanteras.
                  </Paragraph>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  modalContent: {
    backgroundColor: colors.white,
    shadowColor: colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.8,
    minHeight: 300,
    maxHeight: 500,
    width: '90%',
    borderRadius: 5,
    padding: 15,
  },
  button: {
    marginLeft: 'auto',
  },
  imageWrapper: {
    marginTop: 10,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 5,
    marginTop: 5,
  },
  finePrint: {
    fontSize: 12,
  },
});
