import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Paragraph } from './Types';
import { MapIcon } from './Icons';
import { gradients, colors } from './colors';
import { utilityStyles } from './utilityStyles';
import { Pulse } from './Pulse';

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
          <Pulse
            size={35}
            pulseMaxSize={55}
            interval={2000}
            backgroundColor="rgba(255,255,255,0.4)"
            borderColor="rgba(255,255,255,0.4)"
            icon={<MapIcon height={30} width={30} fill="white" />}
          />
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
