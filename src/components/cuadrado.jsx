import React, {useState} from 'react';

const Cuadrado = () => {

    const [color, setcolor] = useState('#000000');

    const [mouse, setmouse] = useState(0);

    const ElegirColor = () => Math.floor(Math.random() * 256)

    const cambiaColor = (red, green, blue) => {

        return ('#' + [red, green, blue].map((c) => {
            const cam = c.toString(16)
            return cam.lenght === 1 ? '0' + cam : cam
        })
        .join('')
        )
    }

    const ElColor = () => {

        const rgb = {

            r: ElegirColor(),
            g: ElegirColor(),
            b: ElegirColor()
        }

        return setcolor(cambiaColor(rgb.r, rgb.g, rgb.b))
    }

    const accionMouse = () => {

        return setmouse(setInterval(ElColor)) 
    }

    const accionRetiraMouse = () => {

        return clearInterval(mouse)
    }

    const accionDobleClick = () => {

        return clearInterval(mouse)
    }

    return (
        <div className='App' style={{margin: 'auto' }}>
            <div id="cuadro"
                 onMouseOver = {accionMouse}
                 onMouseLeave = {accionRetiraMouse}
                 onDoubleClick = {accionDobleClick}
                style = {{width: '255px', height: '255px', backgroundColor: color, margin: 'auto', marginTop: '300px'}}
                >
            </div>{' '}
            <p style={{color: 'black'}}>Cuadro Multicolor</p>
        </div>
    );
}

export default Cuadrado;
