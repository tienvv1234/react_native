import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({headerText}) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.2,
        shadowRadius: 16.0,

        elevation: 2,
    },
    textStyle: {
        fontSize: 20,
    },
});

export default Header;
