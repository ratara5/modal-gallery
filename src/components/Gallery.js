import React from 'react'

import {useLocation, Link} from 'react-router-dom';

import {useContext} from 'react';
import {ImageContext} from '../context/ImageContext'

export const Gallery = () => {
  let location=useLocation();
  const {images} = useContext(ImageContext);

  return (
    <div>
        {images.map(image =>(
            <Link to={{
                pathname:`/img/${image.id}`,
                state:{background: location}
            }}>
                <div style={{
                    margin: "auto",
                    width: "25%",
                    height: "5em",
                    background: image.color}}/>
                <p>{image.title}</p>
            </Link>
        ))}
    </div>
  )
}

