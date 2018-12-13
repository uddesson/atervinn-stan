//@flow
import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Paragraph } from './Types';
import { utilityStyles } from './utilityStyles';
import {
  calcColor,
  getStationSymbol,
  toUpperCase,
  allSortingTypes,
} from '../../utils';
import { WarningIcon } from './Icons';
import { colors } from './colors';

type Props = {
  results: Object[],
  navigation: NavigationScreenProps,
};

/**
 * TODO:
 * (Nice to have) Use withNavigation decorator for component
 * to avoid having to send down navigation as a prop.
 */

export const SearchResultList = (props: Props) => {
  const { navigation, results } = props;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={results}
        renderItem={({ item }) => {
          const backgroundColor = calcColor(item.type.toLowerCase());
          const sortingTypeAvailable = allSortingTypes.includes(
            item.type.toLowerCase()
          );

          return (
            <View style={styles.result}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SearchModal', {
                    title: item.name,
                    sortingType: item.type,
                  })
                }
                style={[
                  utilityStyles.row,
                  utilityStyles.boxShadow,
                  utilityStyles.justifyBetween,
                  styles.wrapper,
                ]}
                activeOpacity={0.7}
              >
                <View style={utilityStyles.row}>
                  {sortingTypeAvailable ? (
                    <View
                      style={[
                        styles.circle,
                        styles.iconMargin,
                        { backgroundColor },
                      ]}
                    />
                  ) : (
                    <View style={styles.iconMargin}>
                      <WarningIcon width={20} height={40} fill={colors.red} />
                    </View>
                  )}
                  <Paragraph
                    style={
                      sortingTypeAvailable ? styles.shortText : styles.longText
                    }
                    numberOfLines={1}
                  >
                    {toUpperCase(item.name)}
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
    paddingBottom: 40,
  },
  result: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 4,
    paddingRight: 4,
  },
  wrapper: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 6,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  iconMargin: {
    marginRight: 10,
  },
  shortText: {
    maxWidth: 200,
  },
  longText: {
    maxWidth: 270,
  },
});
