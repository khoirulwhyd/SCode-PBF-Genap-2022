import React from 'react';

const Login = () => {

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                <div className="form-group">
                                    <label><h2>Form Loginn</h2></label>
                                    <br></br>
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Masukkan Username" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Masukkan Password" className="form-control"/>
                                </div>
                                <button className="btn btn-primary">Login</button>
                                <p>belum punya akun? silahkan</p>
                                <button className="btn btn-danger">Register</button>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default Login