const mongoose = require("mongoose");
const { MONGO_URL, LOCAL_MONGO } = require('../config.json');

const connect = () => {
  mongoose
  // .connect( MONGO_URL, { ignoreUndefined: true })
  .connect( LOCAL_MONGO, { ignoreUndefined: true })
  .catch(err => console.error("db 연결이 되지 않았습니다."));      
};

module.exports = connect;