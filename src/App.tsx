import {Category} from "./pages/Category";
import {Route, Routes} from 'react-router-dom'
import Card from "./components/Card";

function App() {
  
  return (
  <>
    <Routes>
      <Route path='/' element={ <Category/> }/>
      <Route path='/:category' element={ <Card/> }/>
    </Routes>
  </>
  );
}

export default App;
