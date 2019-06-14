import React from 'react';
import Painting from './Painting'



function PaintingList(props) {
    console.log(props)
  return (<div>
            <p>I am Painting List</p>
            {props.paintings.map(painting => <Painting key={painting.id} painting={painting}/>)}
  </div>
  )
}

export default PaintingList;