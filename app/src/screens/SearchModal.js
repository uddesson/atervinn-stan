import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import { utilityStyles, colors, Paragraph, SubHeading } from '../components/UI';

export const SearchModal = props => {
  const { navigation } = props;
  const itemTitle = navigation.getParam('itemTitle');
  const sortingCategory = navigation.getParam('sortingCategory');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[utilityStyles.justifyBetween, utilityStyles.flex]}>
        <View style={[utilityStyles.row, utilityStyles.justifyBetween]}>
          <SubHeading style={[styles.subheading, utilityStyles.capitalizeText]}>
            {itemTitle}
          </SubHeading>
          {/* TODO: add image for 'övrigt avfall' */}
          <Image style={styles.image} source={{ uri: sortingCategory }} />
        </View>
        <Paragraph style={styles.paragraph}>
          {itemTitle} kan återvinnas i stan. Sorteras som {sortingCategory}
        </Paragraph>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={utilityStyles.whiteText}>Stäng</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
  },
  subheading: {
    color: colors.darkGreen,
  },
  image: {
    width: 60,
    height: 60,
  },
  paragraph: {
    marginTop: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.darkGreen,
    backgroundColor: colors.darkGreen,
    borderRadius: 5,
    padding: 5,
    marginTop: 15,
    width: 50,
  },
});
