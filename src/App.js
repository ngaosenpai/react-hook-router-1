import React from 'react';

import './App.css';

import ContainerPostList from './components/container-post-list/ContainerPostList'
import ContainerPostContent from './components/container-post-content/ContainerPostContent'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <ContainerPostList />
        <ContainerPostContent />

      </div>
    </BrowserRouter>
  );
}

export default App;
