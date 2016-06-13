var context = require.context('.', true, /src\/.+\.spec\.js$/);
context.keys().forEach(context);
module.exports = context;
