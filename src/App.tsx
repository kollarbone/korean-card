import {Category} from "./pages/Category";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Card from "./pages/Card";

function App() {
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Category/> }/>
      <Route path='/:category' element={ <Card/> }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
