import React from 'react'
import styles from './Forms.module.css'
// import Modal from './Modal/Modal'
//TODO: Implement Modals


export default function Forms({ setUser, userData }) {
    // let flagModal1 = false;
    const sendData = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (name === "" || email === "" || password === "") {
            console.log("fill info please!");
            // flagModal1 = true;
        }
        setUser({
            "name": name,
            "email": email,
            "password": password,
        })
        console.log(userData)
    }

    return (<>
        <div className={styles.container}>
            {/* {
                useEffect(()=>{
                    flagModal1 ?
                        <div className={styles.modal}> <Modal /> </div> : <div></div>
                }, [flagModal1])  
            } */}
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
