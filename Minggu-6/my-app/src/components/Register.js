import React from 'react';

const Register = () => {

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                <div className="form-group">
                                    <label><h2>Form Register</h2></label>
                                    <p>isi semua kolom semua form untuk mendaftar.</p>
                                    <label>Nama</label>
                                    <input type="text" placeholder="Masukkan Nama" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Masukkan Username" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Masukkan Email" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Masukkan Password" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Ulangi Password</label>
                                    <input type="password" placeholder="Ulangi Password" className="form-control"/>
                                </div>
                                <button className="btn btn-primary">Registrasi</button>
                                <p>sudah punya akun? silahkan</p>
                                <button className="btn btn-danger">Login</button>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Register