var db = require('./db');
var Q = require('q');

module.exports.find = function(collectionName, filter) {
  var defer = Q.defer();

  var collection = db.get().collection(collectionName);

  var find = {};
  if (filter.find) {
    for(var key in filter.find) {
      find[key]= new RegExp(filter.find[key], "i");
    }
  }

  var query = collection.find(find);

  if (!!filter.sort) {
    query.sort(filter.sort);
  }

  if (!!filter.skip) {
    query.skip(filter.skip);
  }

  if(!!filter.limit) {
    query.limit(filter.limit);
  } else {
    // default limit is imposed
    query.limit(20);
  }

  query.toArray(function(err, docs){
    if (err) {
      defer.reject(err);
    } else {
      defer.resolve(docs);
    }
  });

  return defer.promise;
};
