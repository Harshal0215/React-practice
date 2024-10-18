import Products from './Products';
import Heading from './Heading';
import {createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from 'react-router-dom';
import Cart from './component/Cart';
import Dashboard from './component/Dashboard';
import './App.css';
import Rootlayout from './component/Rootlayout';
import Home from './component/Home';

function App() {
const Router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Rootlayout />}>
      <Route path='' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/products' element={<Products />} />
    </Route>
))

  return (
    <div className="App">
      <RouterProvider router={Router}/>
    </div>
  );
}

export default App;
