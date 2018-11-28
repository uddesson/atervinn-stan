import React from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Paragraph } from './Types';
import { utilityStyles } from './utilityStyles';
import { calcColor } from '../../utils';
import { SearchModal } from '../../screens/SearchModal';

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
