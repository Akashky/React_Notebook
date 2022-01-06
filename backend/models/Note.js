const mongoose = require('mongoose');
const { Schema } = mongoose;
const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: String,
        default: Date.now
    },
  });
  //Before Notes i have entered here user that's why i have to deal with the erros
  module.exports = mongoose.model('notes', NotesSchema);