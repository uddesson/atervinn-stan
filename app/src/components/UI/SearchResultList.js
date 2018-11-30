//@flow

import React from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Paragraph } from './Types';
import { utilityStyles } from './utilityStyles';
import { calcColor } from '../../utils';

const listItems = [
  {
    title: 'plastbestick',
    category: 'plast',
    iconCode: 'plastförpackning',
  },
  // sorting data doesn't seperate 'ofärgat' and 'färgat'
  {
    title: 'ölflaska färgat glas',
    category: 'glas',
    iconCode: 'glasförpackningar',
  },
  {
    title: 'läsflaska ofärgat glas',
    category: 'glas',
    iconCode: 'glasförpackningar',
  },
  {
    title: 'kapsyl',
    // sorting data also includes 'metall'
    category: 'metall',
    iconCode: 'metallförpackning',
  },
  {
    //sorting data spells out with / but imagetitle in xcode doesnt allow /
    // should also be translated to tidningar & returpapper in modal
    title: 'reklamblad',
    category: 'tidning & returpapper',
    iconCode: 'tidning_returpapper',
  },
  {
    title: 'Pizzakartong',
    category: 'papper',
    iconCode: 'pappersförpackning',
  },
  {
    title: 'tuggumi',
    // sorting data calls this soppåsen, convert to övrigt?
    category: 'övrigt',
    iconCode: 'ovrigt',
  },
  {
    title: 'braständare',
    // sorting data calls this soppåsen, convert to övrigt?
    category: 'farligt avfall',
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
                    category: item.category,
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
                <View style={[styles.circle, { backgroundColor }]} />
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
