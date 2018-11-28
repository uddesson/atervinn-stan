import React from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Paragraph } from './Types';
import { utilityStyles } from './utilityStyles';
import { calcColor } from '../../utils';
import { SearchModal } from '../../screens/SearchModal';

const listItems = [
  {
    title: 'plastbestick',
    category: 'Plastförpackning',
  },
  {
    title: 'ölflaska färgat glas',
    category: 'Glasförpackningar',
  },
  {
    title: 'läsflaska ofärgat glas',
    category: 'Glasförpackningar',
  },
  {
    title: 'kapsyl',
    category: 'Metall',
  },
  {
    title: 'reklamblad',
    category: 'Tidning/Returpapper',
  },
  {
    title: 'tuggumi',
    category: '',
  },
];

export const SearchResultList = props => {
  const { navigation } = props;
  return (
    <View>
      <FlatList
        data={listItems}
        renderItem={({ item }) => {
          const backgroundColor = calcColor(item.category);

          return (
            <View>
              <TouchableOpacity
                onPress={navigation.navigate('SearchModal', {
                  itemTitle: item.title,
                })}
                style={[utilityStyles.row, styles.wrapper]}
              >
                <Paragraph style={styles.listItem}>{item.title}</Paragraph>
                <View style={[styles.circle, { backgroundColor }]} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      {/* <SearchModal navigation={navigation} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  listItem: {
    textTransform: 'capitalize',
  },
});
