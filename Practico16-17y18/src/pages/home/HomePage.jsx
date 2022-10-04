import React from 'react';

import { useLocation, useHistory } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    const history = useHistory();


    const navigate = (path) => {

        history.push(path)
    }

    const navigateProps = (path) => {

        history.push({
            pathname:path,
            search: '?online=true',
            state: {
                online: true
            }
        })
    }
    

    return (

        <div>

            <h1>Home Page</h1>

            <button onClick={() => navigateProps('/online-state')}>
                Go to page with state/ query params
            </button>

            <button onClick={() => navigate('/profile')}>
                Go to profile
            </button>

            

        </div>
    );
}

export default HomePage;
