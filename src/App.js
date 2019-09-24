import React, { useState } from 'react';
import RenderItems from './components/RenderItems/RenderItems';

import './reset.scss'
import './App.scss';
import Search from './components/Search/Search';

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <Search onSearch={setSearch} search={search}/>
      <RenderItems search={search}/>
    </div>
  );
}

export default App;
