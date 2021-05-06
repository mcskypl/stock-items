import React, {useState} from 'react';
import * as FirestoreService from '../services/firestore';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const emailFn = (e) => {
        setEmail(e.target.value)
    }

    const passwordFn = (e) => {
        setPassword(e.target.value)
    }

    const loginFn = (e) => {
        e.preventDefault();
        FirestoreService.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setError('');
            })
            .catch((error) => {
                setError('Błędny email/hasło!');
            });
    }

    return (
            <div className='container'>
                <form onSubmit={loginFn}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Adres email</label>
                        <input type="email" className="form-control" id="email" onChange={emailFn} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Hasło</label>
                        <input type="password" className="form-control" id="password" onChange={passwordFn} />
                    </div>
                    <button type="submit" className="btn btn-primary">Zaloguj się</button>
                </form>
                <h2>{error}</h2>
            </div>
    );
}

export default Login;