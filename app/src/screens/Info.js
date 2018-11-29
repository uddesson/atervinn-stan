import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Image,
  Text,
} from 'react-native';
import {
  Paragraph,
  Heading,
  SubHeading,
  utilityStyles,
  colors,
} from '../components/UI';
import { symbolExplanation } from '../components/UI';

export class Info extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.screen]}>
        <View style={[styles.container, utilityStyles.center]}>
          <Heading>Symbolförklaring</Heading>
          <FlatList
            style={styles.listContainer}
            data={symbolExplanation}
            keyExtractor={item => item.title}
            renderItem={({ item }) => {
              return (
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
                  <Paragraph style={styles.text}>{item.text}</Paragraph>
                </View>
              );
            }}
          />

          <Paragraph>Material hämtat från FTI, HSR, SVOA</Paragraph>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.whiteSmoke,
  },
  container: {
    padding: 10,
  },
  listContainer: {
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 10,
    height: 400,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  text: {
    margin: 10,
  },
});
