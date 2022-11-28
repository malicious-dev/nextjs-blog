const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
  detail: {
    type: String, 
    required: true
  },

})

const details = new mongoose.model("detail", detailSchema);

module.exports = details;