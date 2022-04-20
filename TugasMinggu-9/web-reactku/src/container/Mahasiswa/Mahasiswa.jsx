import React, {Component} from "react";
import Siswa from "../../component/Mahasiswa/Siswa";
import './Mahasiswa.css';
import API from "../../services/index"

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
        API.getNewsBlog().then(result => {
            this.setState({
                listMahasiswa: result
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusData = (data) => {
        API.deleteNewsBlog(data).then((response) => {
            this.ambilDataDariServerAPI();
        })
    }

    handleHapusAll = () => {
        this.state.listMahasiswa.map(mahasiswa => {
            fetch(`http://localhost:3001/mahasiswa/${mahasiswa.id}`, {method: 'DELETE'})
            .then( res => {
                this.ambilDataDariServerAPI()
            })
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
        API.postNewsBlog(this.state.insertMahasiswa)
            .then((response) => {
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

                    <button type="danger" className="btn btn-danger" onClick={this.handleHapusAll}>Hapus Semua Data</button>
                    
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