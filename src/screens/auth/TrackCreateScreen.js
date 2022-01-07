/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

import Map from '../../components/Map';

const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{fontSize: 48}}>Create a Track</Text>
            <Map />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

TrackCreateScreen.propTypes = {};

export default TrackCreateScreen;
