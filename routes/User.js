const router = require('express').Router()

router.get('/halo',(req, res) =>{
    res.send('halo')
})

module.exports = router