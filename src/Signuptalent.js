import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { useHistory } from "react-router";
import TimezoneSelect from 'react-timezone-select';
import axios from 'axios';

const Signuptalent = () => {

    const[firstname, setFirstname] = useState('');
    const[lastname, setLastname] = useState('');
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[phoneno, setPhoneno] = useState('');
    const[timezone, setTimezone] = useState('');
    const[password, setPassword] = useState('');
    const[terms, setTerms] = useState(false);
    const[submitstatus, setSubmitstatus] = useState('');
    const history = useHistory();

    const onSubmit = (event) => {
        event.preventDefault();
        if(firstname.length > 0) {
            if(lastname.length > 0) {
                if(username.length > 0) {
                    if(email.length > 0) {
                        if(phoneno.length === 10) {
                            if(timezone.value.length > 0) {
                                if(password.length > 0) {
                                    if(terms === true) {
                                        axios.post('http://134.209.148.76:2000/api/v3/sign-up/talent', {
                                            "first_name":firstname,
                                            "last_name":lastname,
                                            "username":username,
                                            "email":email,
                                            "password":password,
                                            "timezone":timezone.value,
                                            "phone":phoneno,
                                            "captcha": true
                                     }).then((response) => {
                                         console.log(response);
                                        setSubmitstatus(response.data.code);
                                        setFirstname('');
                                        setLastname('');
                                        setUsername('');
                                        setEmail('');
                                        setTimezone('');
                                        setPassword('');
                                        return true;
                                    }).catch((error) => {
                                       setSubmitstatus(error.response.data.code);
                                       console.log(error.response);
                                       return false;
                                    })
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    const backTohome = (event) => {
        event.preventDefault()   
        history.push('/');
    }

        return (
            <div className='container col-sm-12 col-lg-6'>
                <h1>Welcome to Talent Signup Page</h1>
                    <div className='form-div'>
                    {submitstatus === 400 ? <h1>You have entered an invalid input. Please check.</h1> 
      : submitstatus === 200 ? <h1>You have signed up successfully</h1> 
      : <h1></h1>}
                        <form onSubmit={onSubmit} className='signinform'>
                        First name<input type='text' placeholder='First name' onChange={(event) => {setFirstname(event.target.value)}} value={firstname} className='form-control form-group txtinput'/>
                        Last name<input type='text' placeholder='Last name' onChange={(event) => {setLastname(event.target.value)}} value={lastname} className='form-control form-group txtinput'/>
                        User name<input type='text' placeholder='User name' onChange={(event) => {setUsername(event.target.value)}} value={username} className='form-control form-group txtinput'/>
                        Email<input type='email' placeholder='Email' onChange={(event) => {setEmail(event.target.value)}} value={email} className='form-control form-group txtinput'/>
                        Phone number<input type='number' placeholder='Phone number' onChange={(event) => {setPhoneno(event.target.value)}} value={phoneno} className='form-control form-group txtinput'/>
                        Password<input type='password' placeholder='Password' onChange={(event) => {setPassword(event.target.value)}} value={password} className='form-control form-group txtinput'/>
                        Timezone<TimezoneSelect value={timezone} onChange={setTimezone} />    
                        <h3></h3>
                            <label>
                                <input type='checkbox' checked={terms} onChange={(event) => {setTerms(true)}}/>
                                <span>   I agree to the Terms & Conditions</span>
                            </label>
                            <input type='submit' className='btn btn-danger btn-block signupsubmit' value='Submit' />
                        </form>
                        <h3></h3>
                        <form onSubmit={backTohome} className='signinform'>
                            <input type='submit' className='btn btn-danger btn-block signupsubmit' value='Homepage' />
                        </form>
                    </div>
            </div>                                                   
        );
    }

export default Signuptalent