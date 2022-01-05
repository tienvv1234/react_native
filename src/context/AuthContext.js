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
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        default:
            return state;
    }
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

const signout = dispatch => {
    return async () => {
        // const response = await jsonServer.get('/blogposts');
        // dispatch({type: 'get_blogposts', payload: response.data});
    };
};

export const {Context, Provider} = createDataContext(
    authReducer,
    {signup, signin, signout, cleanErrorMessage},
    {token: false, errorMessage: ''},
);
