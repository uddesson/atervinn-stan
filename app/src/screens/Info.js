//@flow
import React, { Component } from 'react';
import { StyleSheet, ScrollView, FlatList, View, Image } from 'react-native';
import {
  Paragraph,
  Heading,
  SubHeading,
  utilityStyles,
  colors,
  ParagraphBold,
} from '../components/UI';
import { symbolExplanations } from '../assets';
import { toUpperCase } from '../utils';

export class Info extends Component<{}> {
  render() {
    return (
      <ScrollView
        contentContainerStyle={[styles.screen, utilityStyles.justifyCenter]}
      >
        <Heading style={styles.heading}>Symbolförklaringar</Heading>
        <FlatList
          data={symbolExplanations}
          ListFooterComponent={
            <Paragraph style={styles.smallText}>
              <ParagraphBold style={styles.smallText}>{`ÅTERVINN STAN `}</ParagraphBold>
              använder data och material hämtat från FTI (Förpacknings- och tidningsinsamlingen),
              HSR (Håll Sverige Rent), SVOA (Stockholm Vatten och Avfall) och Stockholms Stad.
              Bakgrundbilder tagna av Theodor Lundqvist, Arno Smit, Yapo Zhou och Fredrik Ohlander.
            </Paragraph>
          }
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <View style={[utilityStyles.row, utilityStyles.boxShadow, styles.itemContainer]}>
              <View style={utilityStyles.flex1}>
                <Image style={styles.image} source={{ uri: item.icon }} />
              </View>

              <View style={styles.textContainer}>
                <SubHeading style={[utilityStyles.boldText, styles.title]}>{item.title}</SubHeading>
                <Paragraph style={[styles.description, utilityStyles.lineHeightNormal]}>
                  {toUpperCase(item.text)}
                </Paragraph>
              </View>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.whiteSmoke,
    paddingHorizontal: '5%',
  },
  itemContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  heading: {
    marginTop: 20,
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    marginRight: 15,
  },
  textContainer: {
    flex: 2,
  },
  title: {
    lineHeight: 32,
  },
  description: {
    fontSize: 16,
  },
  smallText: {
    marginTop: 20,
    fontSize: 12,
    margin: 15,
    lineHeight: 18,
  },
});
