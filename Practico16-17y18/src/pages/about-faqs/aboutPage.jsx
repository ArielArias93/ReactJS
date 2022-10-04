import React from 'react';
import { useLocation, useHistory } from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation();
    const history = useHistory();

    const navigate = (path) => {

        history.push(path)
    }
    
    const goBack = () => {

        history.goBack();
    }

    const goforward = () => {

        history.goForward()
    }

    return (

        <div>

            <h1>
                About | FAQs Page
            </h1>

            <div>
                <button onClick={() => navigate('/')}>
                    Go to home
                </button>

                <button onClick={ goBack }>
                    Go back
                </button>

                <button onClick={ goforward }>
                    Go Forware
                </button>
            </div>
            
        </div>
    );
}

export default AboutPage;
