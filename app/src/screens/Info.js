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
import { symbolExplanation, toUpperCase } from '../utils';

type Props = {};

export class Info extends Component<Props> {
  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={[styles.screen, utilityStyles.justifyCenter]}
        >
          <Heading style={styles.heading}>Symbolförklaring</Heading>
          <FlatList
            data={symbolExplanation}
            ListFooterComponent={
              <Paragraph style={styles.smallText}>
                <ParagraphBold style={styles.smallText}>
                  {`ÅTERVINN STAN `}
                </ParagraphBold>
                använder data och material hämtat från FTI (Förpackning och
                tidnings insamlingen), HSR (Håll sverige rent), SVOA (Stockholm
                vatten och avfall) och Stockholms stad. Bilder tagna av Någon
                Någonsson, Någon Någonsson och Någon Någonsson.
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
                  <SubHeading style={styles.subHeading}>
                    {item.title}
                  </SubHeading>
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.whiteSmoke,
  },
  itemContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginTop: 10,
  },
  heading: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
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
    width: '69%',
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
  },
});
