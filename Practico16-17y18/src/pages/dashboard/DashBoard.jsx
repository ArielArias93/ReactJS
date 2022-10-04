import React from 'react';
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';
import { useHistory } from 'react-router-dom';

const DashBoardPage = () => {

    const history = useHistory();

    const logout = () => {

       history.push('/login')

    }

    return (

        <div align="center">
            <Button variant="contained" onClick={logout}>logout</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default DashBoardPage;
