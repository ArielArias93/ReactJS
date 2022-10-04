import React from 'react';
import { Icon, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Home, { Settings, Task } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

const getIcon = (Icon) => {

    switch (Icon) {

        case 'HOME':
            return (<Home/>)
        
        case 'TASKS':
            return (<Task/>)

        case 'SETTINGS':
            return (<Settings/>)

        default: 
            return (<Home/>)
    }
}

const MenuListItems = ({list}) => {

    const history = useHistory()

    const navigate = (path) => {

        history.push(path)
    }

    return (
        <List>
            {list.map(({text, path, icon}, index) =>
            (
                <ListItem key={index} button onClick={() => navigate(path)}>

                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>

                    <ListItemText
                        primary={text}
                    />

                </ListItem>
            )
            )}
        </List>
    )
}

export default MenuListItems;
