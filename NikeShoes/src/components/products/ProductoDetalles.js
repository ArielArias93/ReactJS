import React, { useContext, useEffect, useState} from 'react'
import { DataContext } from '../../context/Dataprovider'
import { useParams } from 'react-router-dom';
import { ProductoItem } from './ProductoItem';

export const ProductoDetalles = () => {
    const value = useContext(DataContext);
    const [productos] = value.productos;
    const params = useParams();
    const [detalle, setDetalle] = useState([]);
    const [url, setUrl] = useState(0);
    const [images, setImages] = useState(``)
    const addCarrito = value.addCarrito;
    let item = 0

    useEffect(() => {
        productos.forEach(producto => {
            item = 0 ;
            if (producto.id === parseInt(params.id)) {
                setDetalle(producto)
                setUrl(0)
            }
        });        
    }, [params.id, productos]);

    useEffect(() => {
        const values = `${detalle.img1}${url}${detalle.img2}`
        setImages(values)
    }, [url, params.id]);

    const handleInput = e => {
        const number = e.target.value.toString().padStart(2, '01');
        setUrl(number)
        console.log(number);
    }

    return (
        <>
            <div className='detalles'>
                <h2>{detalle.title}</h2>
                <p className='price'>${detalle.price}</p>
                <div className='grid'>
                    <div className='size'>
                        <select placeholder='Talle'>
                            <option value="1">36</option>
                            <option value="1">37</option>
                            <option value="1">38</option>
                            <option value="1">39</option>
                            <option value="1">40</option>
                            <option value="1">41</option>
                            <option value="1">42</option>
                            <option value="1">43</option>
                        </select>
                        <p>Talle</p>
                    </div>
                </div>
                <button onClick={() => addCarrito(detalle.id)}>
                    Añadir al carrito
                </button>
                {
                    url ? <img src={images} alt={detalle.title}/> : <img src={detalle.image} alt={detalle.title}/>
                }
                
                <input type="range" min="1" max="36" value={url} onChange={handleInput}/>
                <div className='description'>
                    <p><b>Descripcion: </b>
                    {detalle.description}
                    </p>
                </div>
                <br/><br/><br/><br/>
            </div>

            <h2 className='relacionados'>Productos relacionados</h2>
            <div className='productos'>
                {
                    productos.map(producto => {

                        if((item < 6)&&(detalle.category === producto.category)){
                            item++;
                            return <ProductoItem 
                            key={producto.id}
                            id={producto.id}
                            title={producto.title}
                            price={producto.price}
                            image={producto.image}
                            category={producto.category}
                            cantidad={producto.cantidad}
                            />
                        }
                    })
                }                
            </div>
        </>
  )
}
