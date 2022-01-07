/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from 'react-native-elements';
import Spacer from '../../components/Spacer';
import {Context as AuthContext} from '../../context/AuthContext';
import {SafeAreaView} from 'react-native-safe-area-context';

const AccountScreen = props => {
    const {signout} = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{fontSize: 48}}>AccountScreen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

AccountScreen.propTypes = {};

export default AccountScreen;
