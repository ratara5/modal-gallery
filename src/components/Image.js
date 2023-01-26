import React from 'react'

import { useParams } from 'react-router-dom';

export const Image = ({title,color}) => {

  return (
    <div>
      <h1>{title}</h1>
      <div
      style={{
        width: "100%",
        height: 400,
        background: color
      }}
    />
    </div>
  );
}
