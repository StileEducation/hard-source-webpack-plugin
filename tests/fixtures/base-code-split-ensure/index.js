require.ensure([], function() {
  var fib = require('./fib');

  console.log(fib(3));
});
