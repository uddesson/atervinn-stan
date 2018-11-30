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
    category: 'plastförpackning',
  },
  {
    title: 'ölflaska färgat glas',
    category: 'glasförpackningar',
  },
  {
    title: 'läsflaska ofärgat glas',
    category: 'glasförpackningar',
  },
  {
    title: 'kapsyl',
    // sorting data also includes 'metall'
    category: 'metallförpackning',
  },
  {
    //sorting data spells out with / but imagetitle in xcode doesnt allow /
    // should also be translated to tidningar & returpapper in modal
    title: 'reklamblad',
    category: 'tidning_returpapper',
  },
  {
    title: 'Pizzakartong',
    category: 'pappersförpackning',
  },
  {
    title: 'tuggumi',
    // sorting data calls this soppåsen, convert to övrigt?
    category: 'övrigt',
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
          const backgroundColor = calcColor(item.category);

          return (
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SearchModal', {
                    itemTitle: item.title,
                    sortingCategory: item.category,
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
