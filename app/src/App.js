import { Route, Routes } from 'react-router-dom';
import {Navigation} from './components/navigation/navigation';
import {Doc} from './pages/doc/doc';
import {Genres} from './pages/genres/genres';
import {Home} from './pages/home/home';
import {ViewBook} from './pages/viewBook/viewBook';


import './App.css';

function App() {
  return (
    <div className="App">
      {/* //Navigation bar */}
      <Navigation />
      {/* Routes to respective pages for each pages defined as a React Component  */}
      <Routes>
        {/* Home Page  */}
        <Route path="/" element={<Home />} />

        {/* Documentation Page  */}
        <Route path="/docs" element={<Doc />} />

        {/* Genres Page which allows a better click-based UI to filter books based on genre*/}
        <Route path="/genres" element={<Genres />} />
        
        <Route path="/viewbook/:id" element={<ViewBook />} />
      

      </Routes>

    
      
    </div>
  );
}

export default App;
