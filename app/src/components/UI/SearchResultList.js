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
import { calcColor, getStationSymbol } from '../../utils';
import { WarningIcon } from './Icons';
import { colors } from './colors';

type Props = {
  results: Object[],
  navigation: NavigationScreenProps,
};

export const SearchResultList = (props: Props) => {
  const { navigation, results } = props;
  return (
    <ScrollView
      contentContainerStyle={[utilityStyles.fullWidth, styles.container]}
      showsVerticalScrollIndicator={false}
    >
      <FlatList
        keyExtractor={item => item.id}
        data={results}
        renderItem={({ item }) => {
          const backgroundColor = calcColor(item.type.toLowerCase());

          return (
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SearchModal', {
                    title: item.name,
                    sortingType: item.type,
                  })
                }
                style={[
                  utilityStyles.row,
                  utilityStyles.justifyBetween,
                  styles.wrapper,
                ]}
                activeOpacity={0.7}
              >
                <View style={utilityStyles.row}>
                  {/* TODO: handle cases with blank types */}
                  {item.iconCode !== 'farligt_avfall' ? (
                    <View style={[styles.circle, { backgroundColor }]} />
                  ) : (
                    // TOOD: add icon
                    <WarningIcon width={20} height={20} fill={colors.red} />
                  )}
                  <Paragraph
                    style={[utilityStyles.capitalizeText, styles.itemText]}
                    numberOfLines={1}
                  >
                    {item.name}
                  </Paragraph>
                </View>
                <View style={utilityStyles.row}>
                  {getStationSymbol(item.type)}
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
  itemText: {
    maxWidth: 200,
  },
});
