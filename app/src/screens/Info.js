//@flow
import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  View,
  Image,
} from 'react-native';
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
              <ParagraphBold
                style={styles.smallText}
              >{`ÅTERVINN STAN `}</ParagraphBold>
              använder data och material hämtat från FTI (Förpackning och
              tidnings insamlingen), HSR (Håll Sverige Rent), SVOA (Stockholm
              Vatten och Avfall) och Stockholms Stad. Bakgrundbilder tagna av
              Theodor Lundqvist, Arno Smit, Yapo Zhou och Fredrik Ohlander.
            </Paragraph>
          }
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <View
              style={[
                utilityStyles.row,
                utilityStyles.boxShadow,
                styles.itemContainer,
              ]}
            >
              <Image
                style={[
                  item.icon === 'module' ? styles.imageBig : styles.image,
                ]}
                source={{ uri: item.icon }}
              />

              <View style={styles.textContainer}>
                <SubHeading style={styles.subHeading}>{item.title}</SubHeading>
                <Paragraph
                  style={[styles.description, utilityStyles.lineHeightNormal]}
                >
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
    paddingHorizontal: 8,
  },
  itemContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginTop: 10,
  },
  heading: {
    marginTop: 30,
    paddingHorizontal: '5%',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  imageBig: {
    width: 80,
    height: 90,
    marginRight: 15,
  },
  textContainer: {
    width: '68%',
  },
  subHeading: {
    fontWeight: 'bold',
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
