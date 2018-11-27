import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { SubHeading, Paragraph } from './Types';
import { utilityStyles } from './utilityStyles';
import { colors } from './colors';

const listItems = [
  {
    title: 'plastbestick',
    category: 'plast',
  },
  {
    title: 'ölflaska färgat glas',
    category: 'fargat-glas',
  },
  {
    title: 'läsflaska ofärgat glas',
    category: 'ofargat-glas',
  },
  {
    title: 'kapsyl',
    category: 'metall',
  },
  {
    title: 'reklamblad',
    category: 'tidningar',
  },
];

export const SearchResultList = () => {
  return (
    <FlatList
      data={listItems}
      renderItem={({ item }) => {
        return (
          <View>
            <TouchableOpacity style={[utilityStyles.row, styles.wrapper]}>
              <Paragraph style={styles.listItem}>{item.title}</Paragraph>
              <Image source={{ uri: item.category }} style={styles.icon} />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  listItem: {
    textTransform: 'capitalize',
  },
});
