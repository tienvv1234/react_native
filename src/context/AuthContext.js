import createDataContext from './createDataContext';
import trackerApi from '../api/trackerApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_errors':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return {errorMessage: '', token: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'signout':
            return {token: null, errorMessage: ''};
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            dispatch({type: 'signin', payload: token});
            RootNavigation.navigate('MainFlow');
        } else {
            RootNavigation.navigate('LoginFlow', {screen: 'SignIn'});
        }
    };
};

const cleanErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
};

const signup =
    dispatch =>
    async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {
                email,
                password,
            });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});
            RootNavigation.navigate('MainFlow');
        } catch (error) {
            dispatch({
                type: 'add_errors',
                payload: 'Something went wrong with signup',
            });
        }
    };

const signin = dispatch => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signin', {
                email,
                password,
            });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});
            RootNavigation.navigate('MainFlow');
        } catch (error) {
            dispatch({
                type: 'add_errors',
                payload: 'Something went wrong with signin',
            });
        }
    };
};

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    RootNavigation.navigate('LoginFlow', {screen: 'SignIn'});
};

export const {Context, Provider} = createDataContext(
    authReducer,
    {signup, signin, signout, cleanErrorMessage, tryLocalSignin},
    {token: false, errorMessage: ''},
);
