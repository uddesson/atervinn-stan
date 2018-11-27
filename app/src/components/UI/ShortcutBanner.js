import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Paragraph } from './Types';
import { MapIcon } from './Icons';
import { gradients } from './colors';
import { utilityStyles } from './utilityStyles';

export const ShortcutBanner = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={gradients.greenToBlue}
        style={styles.gradientContainer}
      >
        <View style={[utilityStyles.row, utilityStyles.center, styles.innerContainer]}>
          <MapIcon height={30} width={30} fill="white" />
          <Paragraph style={[utilityStyles.whiteText, styles.textMargin]}>
            Hitta närmsta station
          </Paragraph>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

ShortcutBanner.defaultProps = {
  onPress: () => {},
};

const styles = StyleSheet.create({
  gradientContainer: {
    width: '100%',
    height: 60,
  },
  innerContainer: {
    alignSelf: 'center',
    height: '100%',
  },
  textMargin: {
    marginRight: 10,
    marginLeft: 15,
  },
});
