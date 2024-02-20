import { Form, redirect, Link } from "react-router-dom";
import supabase from "../supabase";

export async function loginAction({request}){
    let formData = await request.formData();
    let email = formData.get("email");
    let password = formData.get("password");

    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if(error){
        console.log('error login in ', error );
    }else{
        console.log(data);
    }

    return redirect('/');
}

function Login(){


    return (
        <>
        <h1>Login</h1>

        <div>
            <Form method="post" action="/login">
                <input type="email" name="email" required />
                <input type="password" name="password" required />
                <button type="submit">login</button>
            </Form>
        </div>

        <Link to="/signup">Signup for an account (no email verification)</Link>
        </>
    )
}

export default Login;