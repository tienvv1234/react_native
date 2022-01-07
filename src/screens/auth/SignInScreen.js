import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import AuthForm from '../../components/AuthForm';
import NavLink from '../../components/NavLink';
// import NavigationEvent
import {Context as AuthContext} from '../../context/AuthContext';

const SignInScreen = ({navigation}) => {
    const {state, signin, cleanErrorMessage} = useContext(AuthContext);

    useEffect(() => {
        // navigation.addListener('focus', () => console.log('SignInScreen'));
        const listener = navigation.addListener('blur', () => {
            cleanErrorMessage();
        });

        return () => {
            listener.remove?.();
        };
    }, [cleanErrorMessage, navigation]);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
            />
            <NavLink
                text="Dont have an account? Sign up Instead!"
                routeName="SignUp"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
});

SignInScreen.propTypes = {};

export default SignInScreen;
