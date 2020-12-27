import './App.css';
import {useEffect, useState} from 'react';
import firestore from './Database/firebase';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Form from "./Form";
import FormLogin from "./Pages/FormLogin";

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
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Form}/>
          <Route path="/login" exact component={FormLogin}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
