import React, {useState, useEffect} from 'react'
import {Tweetbox, Div, Avatar, Form, DivBox, File} from "./styles"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifIcon from '@mui/icons-material/Gif';
import { Button } from '@mui/material';
import { db, storage } from '../../firebase';
import User from "../../img/user.jpg";


export const TweetBox = () => {

    const [images, setImages] = useState("");
    const [tweetImg, setTweetImg] = useState("");
    const [tweetMsg, setTweetMsg] = useState("");
    const [usuario, setUsuario] = useState("");

    useEffect(() => {
        const perfil = JSON.parse(localStorage.getItem("Perfil"))
        if(perfil){
            setImages(perfil)
        }
    }, []);

    useEffect(() => {
        localStorage.getItem("Perfil", JSON.stringify(images))
        
    }, [images]);

    const sendTweet = async (e) =>{
        e.preventDefault()
        if(usuario.length < 1){
            return alert("Debes ingresar un nombre de usuario")
        }
        if(images.length < 1){
            return alert("Debes ingresar una foto de perfil")
        }
        if(tweetMsg.length < 1){
            return alert("Debes ingresar un tweet")
        }
        if(tweetMsg.length > 300){
            return alert("el tweet excede de caracteres")
        }else{
            await db.collection('posts').doc().set({
                name: usuario,
                username: usuario,
                verifield: true,
                text: tweetMsg,
                timestamp: Date.now(),
                avatar: images,
                imagePost: tweetImg
            })

            setTweetImg("")
            setTweetMsg("")
            setUsuario("")
        }
    }

    const handleSubir = e =>{
        const file = e.target.files[0];
        const storageRef = storage.ref(`/avatar/${file.name}`).put(file);
        storageRef.on(
            "state_changed",
            snapshot =>{},
            error =>{
                console.log(error);
            }, () =>{
                storage
                    .ref("avatar")
                    .Child(file.name)
                    .getDownloadURL()
                    .then(url =>{
                        setImages(url)
                    })
            }
        )
    }

    const handlePost = e =>{
        const file = e.target.files[0];
        const storageRef = storage.ref(`/post/${file.name}`).put(file);
        storageRef.on(
            "state_changed",
            snapshot =>{},
            error =>{
                console.log(error);
            }, () =>{
                storage
                    .ref("post")
                    .Child(file.name)
                    .getdownloadURL()
                    .then(url =>{
                        setTweetImg(url)
                    })
            }
        )
    }

  return (
    <Tweetbox>
        <Form>
            <Div>
            {
                images ? <Avatar src={images} alt="" /> : <Avatar src={User} alt=""/>
            }
                
                <File type="file" onChange={handleSubir}/>
                    <div className='columns'>
                        <input
                            text="text"
                            placeholder='¿Qué está pasando?'
                            value={tweetMsg}
                            onChange={e => setTweetMsg(e.target.value)}
                        />
                        <input
                            text="text"
                            placeholder='Usuario'
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}
                        />
                    </div>
            </Div>
            <Div>
                <DivBox>
                    <File type="file" primary onChange={handlePost}/>
                    <AddPhotoAlternateIcon/>
                    <GifIcon/>
                </DivBox>
                <File type="file" onChange={handlePost}/>
                <input
                    text="text"
                    placeholder='Opcional: url de la imagen/gif'
                    value={tweetImg}
                    onChange={ e=> setTweetImg(e.target.value)}
                />
                <Button
                    onClick={sendTweet}
                    type="submit"
                >Tweet</Button>
            </Div>
        </Form>
    </Tweetbox>
  )
}
