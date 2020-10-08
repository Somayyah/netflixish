import React from 'react';
import Row from './components/Row';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" />
      <Row title="Trending Now" />
      <Row title="Top Rated" />
      <Row title="Action Movies" />
      <Row title="Comedy Movies" />
    </div>
  );
}

export default App;
