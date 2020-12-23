import './App.css';
import {useEffect, useState} from 'react';
import Form from './Form';
import firestore from './Database/firebase';

function App() {
  const userRef = firestore.firestore().collection('users');
  const [data, setData] = useState([]);
  const allData = [];
  const getData = () => {
    userRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        allData.push({id: doc.id, ...doc.data()})
        console.log(doc.data().Firstname)
        console.log(doc.data().Lastname)
      })
      console.log(allData)
      setData(allData);
    })
  }

  useEffect(getData,[])
  console.log(data);

  return (
    <div className="App">
      <Form/>
      {/* <div>
        {data.map(x => <p key={x.id}>Name: {x.Fullname} Fullname: {x.Lastname}</p>)}
      </div> */}
    </div>
  );
}

export default App;
