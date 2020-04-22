import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';

import {UserContext} from '../App/App';

function Logout() {
    const history = useHistory();
    let {isLoggedIn, setIsLoggedIn} = useContext(UserContext);

    if (isLoggedIn) {
        Cookies.remove('authCookie');
        setIsLoggedIn(false);
    }

    history.push('/');
    return null;
}

export default Logout;