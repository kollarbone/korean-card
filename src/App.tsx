import {Category} from "./pages/Category";
import {Route, Routes} from 'react-router-dom'
import {Cards} from "./pages/Cards";

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={ <Category/> }/>
      <Route path='/:category' element={ <Cards/> }/>
    </Routes>
  </>
  );
}

export default App;
