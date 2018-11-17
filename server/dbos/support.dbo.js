let supportModel  = require('../models/support.model');
let saveQuery = (obj, cb)=>{
  let query = new supportModel(obj);
  query.save((error, result) => {
    if (error) cb(error, null);
    else cb(null, result || []);
  });
}
let getQueries = (obj, cb)=>{
  supportModel.find(obj, {}, (error, result) => {
    if (error) cb(error, null);
    else cb(null, result || []);
  });
}

module.exports = {
 saveQuery,
 getQueries
};