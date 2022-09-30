const axios = require ('axios')
const {getAllStaff} = require('../controllers/staff')

const express = require('express')
const router= express.Router();
// const {Staffs} = require ('../db')

router.get('/', getAllStaff)


module.exports=router;