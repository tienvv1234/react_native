import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../navigationRef';
import Spacer from './Spacer';

const NavLink = ({text, routeName}) => {
    return (
        <>
            <TouchableOpacity
                onPress={() => RootNavigation.navigate(routeName)}>
                <Spacer>
                    <Text style={styles.link}>{text}</Text>
                </Spacer>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
    },
});

export default NavLink;
