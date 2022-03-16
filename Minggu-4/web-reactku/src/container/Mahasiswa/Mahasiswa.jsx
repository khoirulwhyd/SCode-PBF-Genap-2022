import React, {Component} from "react";
import Siswa from "../../component/Mahasiswa/Siswa";
import './Mahasiswa.css';

class Mahasiswa extends Component{
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            NIM: 1941720160,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: 2018,
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa?_sort=id&_order=desc')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState( {
                listMahasiswa: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusData = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, {method: 'DELETE'})
            .then( res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState( {
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then( (Response ) => {
                this.ambilDataDariServerAPI();
            })
    }


    render() {
        return(
            <div class="post-mahasiswa">
                <div className="form pb-2 border-botton">
                    <div className="form-group row">
                        <label htmlFor="NIM" className="col-sm-2 col-form-label">Nim</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">No. hp</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                    <h2>Daftar Mahasiswa</h2>
                    {
                        this.state.listMahasiswa.map(mahasiswa => {
                            return <Siswa key={mahasiswa.id} idMhs={mahasiswa.id} NIM={mahasiswa.NIM} nama={mahasiswa.nama} alamat={mahasiswa.alamat}
                            hp = {mahasiswa.hp} angkatan = {mahasiswa.angkatan} status = {mahasiswa.status} idMahasiswa={mahasiswa.id} hapusData={this.handleHapusData}/>
                        })
                    }
            </div>
        )
    }
}

export default Mahasiswa;