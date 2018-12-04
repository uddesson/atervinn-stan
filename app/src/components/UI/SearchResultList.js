//@flow

import React from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Paragraph } from './Types';
import { utilityStyles } from './utilityStyles';
import { calcColor } from '../../utils';
import { WarningIcon } from './Icons';
import { colors } from './colors';

const listItems = [
  {
    title: 'plastbestick',
    sortingType: 'plast',
    iconCode: 'plastförpackning',
  },
  //sorting data doesn't seperate 'ofärgat' and 'färgat'
  // {
  //   title: 'ölflaska färgat glas',
  //   sortingType: 'glas',
  //   iconCode: 'glasförpackningar',
  // },
  {
    title: 'läsflaska ofärgat glas',
    sortingType: 'glas',
    iconCode: 'glasförpackningar',
  },
  {
    title: 'kapsyl',
    sortingType: 'metall',
    iconCode: 'metallförpackning',
  },
  {
    //sorting data spells out with / but imagetitle in xcode doesnt allow /
    // should also be translated to tidningar & returpapper in modal
    title: 'reklamblad',
    sortingType: 'tidning & returpapper',
    iconCode: 'tidning_returpapper',
  },
  {
    title: 'Pizzakartong',
    sortingType: 'papper',
    iconCode: 'pappersförpackning',
  },
  {
    title: 'tuggumi',
    // sorting data calls this soppåsen, convert to övrigt?
    sortingType: 'övrigt',
    iconCode: 'ovrigt',
  },
  {
    title: 'braständare',
    sortingType: 'farligt avfall',
    iconCode: 'farligt_avfall',
  },
];

type Props = {
  navigation: NavigationScreenProps,
};

export const SearchResultList = (props: Props) => {
  const { navigation } = props;
  return (
    <View style={utilityStyles.fullWidth}>
      <FlatList
        keyExtractor={item => item.title}
        data={listItems}
        renderItem={({ item }) => {
          const backgroundColor = calcColor(item.iconCode);

          return (
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SearchModal', {
                    title: item.title,
                    sortingType: item.sortingType,
                    iconCode: item.iconCode,
                  })
                }
                style={[
                  utilityStyles.row,
                  utilityStyles.justifyBetween,
                  styles.wrapper,
                ]}
              >
                <Paragraph style={utilityStyles.capitalizeText}>
                  {item.title}
                </Paragraph>

                {item.iconCode !== 'farligt_avfall' ? (
                  <View style={[styles.circle, { backgroundColor }]} />
                ) : (
                  <WarningIcon width={23} height={23} fill={colors.red} />
                )}
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    marginTop: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
