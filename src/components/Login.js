import React, { useRef } from 'react'
import { loginUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';

export const Login = () => {
    // remark dispatch(loginUser(value)) -> the value will go directly inside the action.payload, no need to have actionCreator functions!
    const dispatch = useDispatch();

    const nameRef = useRef();
    const ageRef = useRef();
    const emailRef = useRef();

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(e.currentTarget.elements[0].value); // or you could get the form values like this if you are not using the useRef() hook

        dispatch(loginUser(
            {
                name: nameRef.current.value,
                age: ageRef.current.value,
                email: emailRef.current.value
            }
        ));
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                Name: <input type="text" ref={nameRef} /><br />
                Age: <input type="number" ref={ageRef} /><br />
                email: <input type="email" ref={emailRef} /><br />
                <br />
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

// (i) you could also just have a button onClick() without the form so you dont have to use the 
//      e.preventDefault() to prevent reloading, but then you can not submit with enter, and input types wont be checked on submit. 
//      e.g. valid email, valid numberm etc