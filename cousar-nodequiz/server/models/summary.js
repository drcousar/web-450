/*
============================================
; Title: NodeQuiz
; Author: Don Cousar
; Date: 13 October 2019
; Description: MEAN Stack Node Quiz Project
;===========================================
*/
//Define variables
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define Schema
let summarySchema = new Schema({
  employeeId: {type: Number},
  quizId: {type: Number},
  date: {type: Date},
  score: {type: Number}
})

//export module
module.exports = mongoose.model('Summary', summarySchema);