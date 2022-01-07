/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import AuthForm from '../../components/AuthForm';
import NavLink from '../../components/NavLink';
import {Context as AuthContext} from '../../context/AuthContext';
const SignUpScreen = ({navigation}) => {
    const {state, signup, cleanErrorMessage} = useContext(AuthContext);

    useEffect(() => {
        const listener = navigation.addListener('blur', () =>
            cleanErrorMessage(),
        );

        return () => {
            listener.remove?.();
        };
    }, [cleanErrorMessage, navigation]);
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                text="Already Have an account? Sign in Instead!"
                routeName="SignIn"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginBottom: 15,
    },
});

SignUpScreen.propTypes = {};

export default SignUpScreen;
