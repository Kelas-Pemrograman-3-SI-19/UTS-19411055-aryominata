const userModel = require('../model/user')

exports.register = (data) => {
    new Promise((resolve, reject) =>{
      })  .then(() =>{
            resolve({
                sukses: true
        ,        pesan: 'Berhasil Registrasi'
            })
        }).catch(() => {
            reject({
                sukses: false
         ,       pesan: 'Gagal Registrasi'
            })
        })
    }