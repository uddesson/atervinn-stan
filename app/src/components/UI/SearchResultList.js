//@flow
import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
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
  {
    title: 'ölflaska färgat glas',
    sortingType: 'glas',
    iconCode: 'glasförpackningar',
  },
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
    <ScrollView
      contentContainerStyle={[utilityStyles.fullWidth, styles.container]}
    >
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
                <View style={utilityStyles.row}>
                  {item.iconCode !== 'farligt_avfall' ? (
                    <View style={[styles.circle, { backgroundColor }]} />
                  ) : (
                    <WarningIcon width={40} height={30} fill={colors.red} />
                  )}
                  <Paragraph style={utilityStyles.capitalizeText}>
                    {item.title}
                  </Paragraph>
                </View>
                <View>
                  <Image
                    style={styles.image}
                    source={{ uri: 'fti-container' }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  wrapper: {
    padding: 10,
    marginTop: 10,
    backgroundColor: colors.white,
    borderRadius: 6,
    shadowColor: colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.8,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
});
