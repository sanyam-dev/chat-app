import React from 'react'
import styles from './Forms.module.css'
// import axios from 'axios'
// import Modal from './Modal/Modal'
//TODO: Implement Modals


export default function Forms({ setUser, userData }) {

    const sendData = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (name === "" || email === "" || password === "") {
            console.log("fill info please!");
        }
        setUser({
            "name": name,
            "email": email,
            "password": password,
        })
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }
        fetch('http://localhost:5000/api/user/register', requestOptions)
            .then(response => {
                if(response.status === 200)
                window.alert("Successful Registration!")
                console.log(userData)
                console.log(response)
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';

            }
        )
    }
    return (
        <>
            <div className={styles.container}>
                <form >
                    <div className={styles.centerDiv} >
                        <input type='text' placeholder='name' id='name' />
                        <input type='email' placeholder='email' id='email' />
                        <input type='password' placeholder='password' id='password' />
                        <button value="send" onClick={sendData}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
