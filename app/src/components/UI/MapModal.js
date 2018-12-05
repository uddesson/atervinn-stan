import React, { Component } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from './colors';
import { utilityStyles } from './utilityStyles';
import { SubHeading, Paragraph } from './Types';

type Props = {
  visible: boolean,
  onPress: () => boolean,
  marker: {
    address: ?string,
    stationName: ?string,
    sorting: [],
    locationConfirmed: ?boolean,
    sortingConfirmed: ?boolean,
  },
};

export const MapModal = (props: Props) => {
  const { visible, onPress, marker } = props;
  const sortingOptions = marker.sorting.map(option => {
    return <Image style={styles.image} source={{ uri: option }} />;
  });

  return (
    <View style={styles.container}>
      <Modal visible={visible} transparent={true} animationType={'none'}>
        <View style={[utilityStyles.flex1, utilityStyles.center]}>
          <View style={styles.modalContent}>
            <SubHeading style={utilityStyles.capitalizeText}>
              {marker.address}
            </SubHeading>
            <Paragraph>
              {marker.sortingConfirmed
                ? 'Bekräftad position'
                : 'Ej bekräftad position'}
            </Paragraph>

            {marker.sortingConfirmed ? (
              <View>
                <Paragraph>Möjliga sorteringsalternativ</Paragraph>
                <View style={utilityStyles.row}>{sortingOptions}</View>
              </View>
            ) : (
              <Paragraph>Sorteringsalternativ är ej bekräftad</Paragraph>
            )}

            <TouchableOpacity>
              <Paragraph onPress={onPress}>Stäng</Paragraph>
            </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.whiteSmoke,
    height: 300,
    width: '90%',
    borderRadius: 5,
  },
  image: {
    width: 40,
    height: 40,
  },
});
