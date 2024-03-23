import React from "react";
import { Form, Field } from 'react-final-form'

let onSubmit=(e)=>{
    console.log(e)
}
let validate=(e)=>{

}

 const LoginForm=()=>{
    return <>
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name='login' component='input' placeHolder='Login' />
                    </div>
                    <div>
                        <Field name='password' component='input' placeHolder='Password' />
                    </div>
                    <div>
                        <Field name='rememberMe' component='input' type="checkbox" /> Remember me
                    </div>
                    <div>
                        <button type='LoginBtn'>Login</button>
                    </div>
                </form>
            )}>
        </Form>
    </>
 }

const Login = () => {
    return <>
        <h1>Login</h1>
        <LoginForm/>
    </>
}
export default Login;