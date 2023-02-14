import React from 'react';
import { Home } from './components/Home';
import { Sidebar } from './components/Sidebar';
import { Widgets } from './components/Widgets';
import GlobalStyles from "./styles/GlobalStyles"    


function App() {
  return (

    <div className="App">
      
      {/* Sidibar */}
      <Sidebar></Sidebar>
      {/* Home */}
      <Home></Home>
      {/* Widgets */}
      <Widgets></Widgets>

      <GlobalStyles/>
    </div>
  );
}

export default App;
