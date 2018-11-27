import React from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Paragraph } from './Types';
import { utilityStyles } from './utilityStyles';
import { calcColor } from '../../utils';
import { SearchResultModal } from './SearchResultModal';

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
  const { isModalOpen, handleModal } = props;
  return (
    <>
      <FlatList
        data={listItems}
        keyExtractor={item => item.title}
        renderItem={({ item }) => {
          const backgroundColor = calcColor(item.category);

          return (
            <View>
              <TouchableOpacity
                style={[utilityStyles.row, styles.wrapper]}
                activeOpacity={0.7}
                onPress={() => handleModal(true)}
              >
                <Paragraph style={styles.listItem}>{item.title}</Paragraph>
                <View style={[styles.circle, { backgroundColor }]} />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <SearchResultModal isVisible={isModalOpen} handleModal={handleModal} />
    </>
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
