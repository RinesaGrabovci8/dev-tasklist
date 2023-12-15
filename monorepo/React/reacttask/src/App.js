import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Page from './Pages/Page/Page';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import SinglePage from './Pages/SinglePages/SinglePage';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    console.log('Card clicked!');
    setIsClicked(true); // Make sure this is set to true
  };
  return (
    <BrowserRouter>
      <Header isClicked={isClicked}/>
      <Routes>
        <Route path='/' element={<Page handleCardClick={handleCardClick} />}/>
        <Route path='/:link' element={<SinglePage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
