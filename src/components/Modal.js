import {useNavigate, useParams} from 'react-router-dom'
import {Image} from './Image';

import React from 'react'

import {useContext} from 'react';
import {ImageContext} from '../context/ImageContext'

export const Modal = () => {
  const {images} = useContext(ImageContext)
  const navigate=useNavigate();
 
  let { id } = useParams();
  let image = images[parseInt(id, 10)]; //images[1]

  if (!image) return null;

  let back = e => {
    e.stopPropagation();
    navigate(-1);
  }

  return (
    <div className="modalDiv" onClick={back}>
        <div className="modal">
        <h3>Modal</h3>
        <Image title={image.title} color={image.color}/>
        <button onClick={back}>Close</button>
        </div>
    </div>
  );
};