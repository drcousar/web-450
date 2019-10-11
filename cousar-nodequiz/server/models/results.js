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
let resultsSchema = new Schema({
  employeeId: {type: Number, required: true },
  quizId: {type: Number}, required: true,
  answerBank: {type: Array}
})

//export module
module.exports = mongoose.model('Results', resultsSchema);