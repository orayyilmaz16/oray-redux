import React from 'react';
import { Container } from 'reactstrap';
import Navi from '../navi/Navi';
import DashBoard from './DashBoard';
import { Routes,Route } from 'react-router-dom';
import CartDetail from '../cart/CartDetail';

function App() {
  return (
    <Container className='my-5'>
      <Navi />
      <pre className='my-5'></pre>
      <Routes>
        <Route path='/' exact Component={DashBoard} />
        <Route path="/product" exact Component={DashBoard} />
        <Route path="/cart" exact Component={CartDetail}/>
      </Routes>
    </Container>
  );
}

export default App;
