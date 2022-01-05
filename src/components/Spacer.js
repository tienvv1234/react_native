import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Space = ({children}) => {
    return <View style={styles.Spacer}>{children}</View>;
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15,
    },
});

export default Space;
