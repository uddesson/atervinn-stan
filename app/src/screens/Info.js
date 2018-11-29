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
} from '../components/UI';
import { symbolExplanation } from '../components/UI';
import { toUpperCase } from '../utils';

type Props = {};

export class Info extends Component<Props> {
  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={[styles.screen, utilityStyles.center]}
        >
          <Heading>Symbolförklaring</Heading>
          <FlatList
            data={symbolExplanation}
            contentContainerStyle={styles.listContainer}
            ListFooterComponent={
              <Paragraph style={styles.smallText}>
                Material hämtat från FTI, HSR, SVOA och Stockholms stad.
              </Paragraph>
            }
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <View style={[utilityStyles.row]}>
                <Image style={styles.image} source={{ uri: item.icon }} />
                <SubHeading
                  style={[
                    utilityStyles.capitalizeText,
                    utilityStyles.alignSelfEnd,
                    styles.subHeading,
                  ]}
                >
                  {item.title}
                </SubHeading>
                <Paragraph style={styles.text}>
                  {toUpperCase(item.text)}
                </Paragraph>
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
  listContainer: {
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 10,
    margin: 15,
    marginTop: 5,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  subHeading: {
    marginTop: 10,
  },
  text: {
    margin: 10,
  },
  smallText: {
    marginTop: 20,
    fontSize: 12,
  },
});
