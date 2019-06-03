import React from 'react';
import Header from './Header'
import PaintingList from './PaintingList'
import 'semantic-ui-css/semantic.min.css';
import paintings from './paintings';
// import {PaintingList} from './PaintingList' => only look for PaintingList in PaintingList.js



function App() {
  // console.log(paintings)
  return (<div>
    <Header />
    <PaintingList paintings={paintings} />
  </div>
  )
}

export default App;
