/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext} from 'react';
import {Context as AuthContext} from '../../context/AuthContext';

const ReSolveAuthScreen = () => {
    const {tryLocalSignin} = useContext(AuthContext);
    useEffect(() => {
        tryLocalSignin();
    }, []);
    return null;
};

export default ReSolveAuthScreen;
