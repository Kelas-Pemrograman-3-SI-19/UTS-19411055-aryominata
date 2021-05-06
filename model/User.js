const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    Nama: {
        type: String,
    },
    TempatTanggallahir: {
        type: String,
    },
    Jeniskelamin: {
        type: String,
    },
    Golongandarah: {
        type: String,
    },
    jumlahsaudara : {
        type: String,
    },
    anakke: {
        type: String,
    },
    alamatasal: {
        type: String,
    },
    status: {
        type: String,
    },
    alamattinggal: {
        type: String
    }
})
module.exports = mongoose.model('user',UserSchema)