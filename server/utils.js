  const getElementById = (arr, id) => arr.find((val) => val.id === id);
  
  const getIndexById = (arr, id) => arr.findIndex((val) => val.id === id);
  
  const getNewId = (arr) => {
    const maxId = arr.reduce((acc, nextVal) => {
      return acc = Math.max(acc, nextVal.id);
    }, 0);
    return maxId + 1;
  };
  
  module.exports = {
    getElementById,
    getIndexById,
    getNewId,
  };