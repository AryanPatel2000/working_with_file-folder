const controller = require('../controller/read_file')
const express = require('express');
const app = express()

const router = express.Router()

router.get('/file', controller.stream)
router.get('/file', controller.writestream)
router.post('/write', controller.writestream)
router.get('/buffer', controller.fileBuffer)
router.get('/log', controller.logAndobject)

module.exports = router
