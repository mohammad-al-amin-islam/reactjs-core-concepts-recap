import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name="Bogura" famousFood="Doi"></District>
      <District name="Cumilla" famousFood="Rosmalai"></District>
      <District name="Chapai" famousFood="Mango"></District>
    </div>
  );
}
const districtStyle = {
  backgroundColor: 'gray',
  margin: '20px',
  padding: '20px',
  borderRadius: '20px'
}
function District(props) {
  const [ratings, setRatings] = useState(1);
  const giveRatings = () => setRatings(ratings * 2);

  return (
    <div style={districtStyle}>
      <h1>Name:{props.name}</h1>
      <p>Famous food:{props.famousFood}</p>
      <h4>Ratings:{ratings}</h4>
      <button onClick={giveRatings}>Give Ratings</button>
    </div>
  )
}

export default App;
