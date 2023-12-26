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
        </>
    )
}

export default Login;