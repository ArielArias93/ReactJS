import React from 'react'
import {Contenedor} from "./styles"
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconOption } from './IconOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

export const Sidebar = () => {

  return (
    <Contenedor>
        <TwitterIcon className='twitter-logo'></TwitterIcon>
        <IconOption active text="Home" Icon={HomeIcon}></IconOption>
        <IconOption text="Explorar" Icon={SearchIcon}></IconOption>
        <IconOption text="Notificaciones" Icon={NotificationsNoneIcon}></IconOption>
        <IconOption text="Mensaje" Icon={MailOutlineIcon}></IconOption>
        <IconOption primary text="Marcadores" Icon={BookmarkBorderIcon}></IconOption>
        <IconOption primary text="Listas" Icon={ListAltIcon}></IconOption>
        <IconOption primary text="Perfil" Icon={PermIdentityIcon}></IconOption>
        <IconOption primary text="Mas" Icon={MoreHorizIcon}></IconOption>

        <Button variant='outlined' fullWidth>Tweet</Button>
    </Contenedor>
  )
}
