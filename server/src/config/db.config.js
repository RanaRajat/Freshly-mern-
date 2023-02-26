const mongoose = require('mongoose');

const connect = async()=>{
      return await mongoose.connect(`mongodb+srv://freshly-mern:Nike21uno@cluster0.hd7thlx.mongodb.net/?retryWrites=true&w=majority`);
}

module.exports = connect;
