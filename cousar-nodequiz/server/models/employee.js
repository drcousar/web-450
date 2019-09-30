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
