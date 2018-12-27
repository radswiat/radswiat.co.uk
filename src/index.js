import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import ProjectList from './app/components/projectsList'

import './app/styles/main.scss'

import Carousel from './app/components/carousel'

function App() {
  return (
    <div>
      {/* <Carousel /> */}
      <ProjectList />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
