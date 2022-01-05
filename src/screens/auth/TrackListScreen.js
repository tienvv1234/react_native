/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import PropTypes from 'prop-types';

const TrackListScreen = ({navigation}) => {
    return (
        <>
            <Text style={{fontSize: 48}}>TrackListScreen</Text>
            <Button
                title="Go To track details"
                onPress={() => navigation.navigate('TrackDetailScreen')}
            />
        </>
    );
};

const styles = StyleSheet.create({});

TrackListScreen.propTypes = {};

export default TrackListScreen;
