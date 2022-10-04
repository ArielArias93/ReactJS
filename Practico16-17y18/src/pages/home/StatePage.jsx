import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePage = () => {

    const location = useLocation()

    console.log('Localition state: ' + location.state.online);

    return (
        
        <div>
            <h1>State: {location.state.online ? 'El usuario esta online' : 'El usuario esta offline'  }</h1>

        </div>
    );
}

export default StatePage;
