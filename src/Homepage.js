import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App';
import { useHistory } from "react-router";

const Homepage = () => {

    const history = useHistory();

    const onfanclick = (event) => {
        event.preventDefault()
        history.push('/fan');
    }

    const ontalentclick = (event) => {
        event.preventDefault()
        history.push('/talent');
    }

        return (
                    <div className='container col-sm-12 col-lg-6'>
                        <h1>Welcome to Fanconvo</h1>
                        <div className='form-div'>
                            <button className='btn btn-danger btn-block signupsubmit' onClick={onfanclick}>Fan Signup</button>
                            <button className='btn btn-danger btn-block signupsubmit' onClick={ontalentclick}>Talent Signup</button>
                        </div>
                    </div>
        );
}

export default Homepage;