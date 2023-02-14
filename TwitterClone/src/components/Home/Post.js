import React from 'react'
import { Avatar, Post, PostBody, PostDescription, PostFooter, Images } from './styles'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import VerifiedIcon from '@mui/icons-material/Verified';

export const Posts = ({
    name,
    username,
    text,
    avatar,
    imagePost,
}) => {
  return (
    <Post>
        <div className='post_avatar'>
            <Avatar src={avatar} ></Avatar>
        </div>
        <PostBody>
            <div>
                <div>
                    <h3>{name}<span><VerifiedIcon className='post_icon'/></span> <span>@{username}</span></h3>
                    <PostDescription>
                        {text}
                    </PostDescription>
                </div>
                <Images src={imagePost}></Images>
                <PostFooter>
                    <ChatBubbleOutlineIcon fontsixe="small"></ChatBubbleOutlineIcon>
                    <RepeatIcon fontsixe="small"></RepeatIcon>
                    <FavoriteBorderIcon fontsixe="small"></FavoriteBorderIcon>
                    <PublishIcon fontsixe="small"></PublishIcon>
                </PostFooter>
            </div>
        </PostBody>
    </Post>
  )
}
