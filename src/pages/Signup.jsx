import { Form } from "react-router-dom";
import supabase from "../supabase";

export async function signUpAction({request}) {
    let formData = await request.formData();
    let email = formData.get("email");
    let password = formData.get("password");

    const {data, error} = await supabase.auth.signUp({
        email,
        password
    });

    if(error){
        console.log("something went wrong creating this user", error);
    }

    console.log("user created", data);
    return data;
}

function Signup(){
    return (
        <>
        <h1>Signup</h1>

        <div>
            <Form method="post" action="/signup">
                <input type="email" name="email" required />
                <input type="password" name="password" required />
                <button type="submit">signup</button>
            </Form>
        </div>
        </>
    )
}

export default Signup;