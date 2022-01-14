import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({params}) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Albums!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
    },
    textStyle: {
        fontSize: 20,
    },
});

export default Header;
