import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadData></LoadData>
      <District name="Bogura" famousFood="Doi"></District>
      <District name="Cumilla" famousFood="Rosmalai"></District>
      <District name="Chapai" famousFood="Mango"></District>
    </div>
  );
}

function LoadData() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (
    <div>
      <h3>Total Post:{posts.length}</h3>
      {
        posts.map(post => <Post title={post.title} body={post.body} key={post.id}></Post>)
      }
    </div>
  )
}

function Post(props) {
  return (
    <div style={{ backgroundColor: 'lightblue', margin: '20px', padding: '20px' }}>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
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
