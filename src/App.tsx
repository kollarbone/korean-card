import {Category} from "./pages/Category";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Card from "./pages/Card";

function App() {
  
  return (
  <BrowserRouter>
  <p className='text-3xl p-3 bg-violet-200 text-center'>Welcome to Korean Cards!</p>
    <Routes>
      <Route path='/' element={ <Category/> }/>
      <Route path='/:category' element={ <Card/> }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
