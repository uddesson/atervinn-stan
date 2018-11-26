import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph } from './Types';

export const Message = props => {
    const { type } = props;
    const instructions = `Osäker på var eller hur ditt skräp ska återvinnas? Använd sökfunktionen. Du kan också gå direkt till närmsta station.`;
    const error = `Hm, den var klurig. Försök återvinna det så gott du kan – så jobbar vi vidare på att utöka databasen!`;
    const message = type === 'instructions' ? instructions : error;

    return (
        <View style={styles.wrapper}>
            <Paragraph>{message}</Paragraph>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
