import React from 'react'
import './FormLogin.css';
import {useState, useEffect} from 'react';
import logo from '../Assets/synhub-logo.png';
import firestore from '../Database/firebase';
import firebase from 'firebase/app'
import 'firebase/firestore';

const FormLogin = () => {
    const userRef = firestore.firestore().collection('users');
    const [data, setData] = useState([]);
    const [number, setNumber] = useState('0');
    const allData = [];    const increment = firebase.firestore.FieldValue.increment(1);
    const getUser = () => {
        userRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
            allData.push({id: doc.id, ...doc.data()})
        })
        console.log(allData)
        setData(allData);
        })
    }
    useEffect(getUser,[])

    const numberChange = (e) => {
        setNumber(e.target.value)
    }
    const recordFrequency = (e) => {
        // const frequency;
        console.log(number)
        e.preventDefault()
        data.forEach(items => {
            // console.log(items.PhoneNumber)
            if(items.PhoneNumber === number) {
                console.log(items.PhoneNumber)
                userRef.doc(items.id).update({
                    frequency: increment
                })
            }
        })
        
        // userRef.forEach(items => {
        //     console.log(items)
        // })
        // userRef.update({
        //     // ต้องหา userRef ที่มี phoennumber เป็น e.target.value
        //     // เอา userRef.phonenumber > : increment
        //     // [e.target.name]: increment
        // })
    }
    return (
        <div className="FormLogin-root">
            <div className="FormLogin-root-detail">
                <img src={logo} className="login-logo"></img>
                <form onSubmit={recordFrequency} className="formSignin">
                <div className="text-input">
                    <div className="label-input">Input Your Phone Number</div>
                    <input className="text-input-2" name="frequency" type="text" placeholder="082-222-2222" onChange={numberChange}></input>
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <div className="need-help">

            </div>
        </div>
        </div>
    )
}

export default FormLogin
