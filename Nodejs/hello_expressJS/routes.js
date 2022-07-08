var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
	res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify({ "status":"up" }))
})

module.exports = router
