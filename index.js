var addDays = require("date-fns/addDays");

const result = addDays(new Date(2020, 8, 22), 10);

module.exports = result;

console.log(result);
