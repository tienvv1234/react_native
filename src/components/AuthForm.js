import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Spacer from './Spacer';
import {Text, Input, Button} from 'react-native-elements';

const AuthForm = ({errorMessage, headerText, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>

            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => {
                        onSubmit({email, password});
                        // navigation.navigate('SignIn');
                    }}
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginBottom: 15,
    },
});

export default AuthForm;
