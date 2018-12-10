//@flow

import React, { Component } from 'react';
import { TouchableOpacity, View, Alert, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Permissions from 'react-native-permissions';
import { Paragraph, ParagraphBold } from './Types';
import { gradients, colors } from './colors';
import { utilityStyles } from './utilityStyles';
import { Pulse } from './Pulse';

type Props = {
  onPress: () => void,
  navigation: NavigationScreenProps,
};

export class ShortcutBanner extends Component<Props> {
  requestPermission = async () => {
    const { navigation } = this.props;
    await Permissions.request('location');
    navigation.navigate('Map'); // Navigate to map after reciving the request response.
  };

  alertForLocationPermission = (permissionStatus: string) => {
    const { navigation } = this.props;
    Alert.alert(
      'Appen har inte åtkomst till din plats',
      'För att kunna guida dig på bästa sätt behöver appen känna till vart du befinner dig. Vill du ge åtkomst?',
      [
        {
          text: 'Nej, jag hittar själv',
          onPress: () => navigation.navigate('Map'),
          style: 'cancel',
        },
        /*
         * If the status is undetermined it their first time getting the question.
         * If the status is NOT undetermined it's one of 'denied' or 'restricted',
         * which both requires that the user edits this in their own settings -> we send them there.
         */
        permissionStatus === 'undetermined'
          ? { text: 'Ja, det går bra', onPress: this.requestPermission } // Send a permission request.
          : {
              text: 'Ja, ändra inställningar',
              onPress: Permissions.openSettings,
            },
      ]
    );
  };

  checkForPermissionStatus = async () => {
    const permissionStatus = await Permissions.check('location');
    const { navigation } = this.props;

    permissionStatus === 'authorized'
      ? navigation.navigate('Map') // Go straight to map screen.
      : this.alertForLocationPermission(permissionStatus); // Ask the user for permission.
  };

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={this.checkForPermissionStatus}
        style={[utilityStyles.fullWidth, styles.container]}
      >
        <View
          style={[
            utilityStyles.row,
            utilityStyles.center,
            styles.innerContainer,
          ]}
        >
          <Pulse
            size={5}
            pulseMaxSize={50}
            interval={2000}
            backgroundColor={colors.transparentWhite}
            borderColor={colors.transparentWhite}
            icon={<View style={styles.circle} />}
          />
          <ParagraphBold
            style={[
              utilityStyles.whiteText,
              styles.textMargin,
              utilityStyles.uppercaseText,
            ]}
          >
            Hitta närmsta station
          </ParagraphBold>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    backgroundColor: colors.blue,
    shadowColor: colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.8,
  },
  innerContainer: {
    alignSelf: 'center',
    height: '100%',
  },
  textMargin: {
    marginRight: 10,
    marginLeft: 15,
  },
  circle: {
    height: 18,
    width: 18,
    borderRadius: 18 / 2,
    backgroundColor: colors.blue,
    borderWidth: 2,
    borderColor: colors.white,
  },
});
