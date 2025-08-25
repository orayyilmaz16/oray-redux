import React from 'react';
import { Container } from 'reactstrap';
import Navi from '../navi/Navi';
import DashBoard from './DashBoard';

function App() {
  return (
    <Container className='my-5'>
      <Navi />
      <pre className='my-5'></pre>
      <DashBoard />
    </Container>
  );
}

export default App;
