/*
============================================
; Title: NodeQuiz
; Author: Don Cousar
; Date: 29 September 2019
; Description: MEAN Stack Node Quiz Project
;===========================================
*/
//Define variables
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define Schema
let employeeSchema = new Schema({
  employeeId: {type: String, required: true },
  firstname: {type: String},
  lastname: {type: String}
})

//export module
module.exports = mongoose.model('Employee', employeeSchema);
