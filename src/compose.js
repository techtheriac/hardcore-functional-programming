//curry :: (λf.(λx.(λy.(f(x, y)))))
//compose :: (λfg.(λx.(f(g(x)))))

const { curry, compose } = require('ramda');

//add is curried to make it a unary composable function.
//allowing for the flow of data from one function to another
//through a pipe-line represented an arbitrary function argument.
//This is applicable to the concat function too.
//Note that some Ramda functions are auto-curried

//(λf.(λx.(λy.(f(x, y)))))(add) -> (λx.(λy.(add(x, y))))
const add = curry((x, y) => x + y);

const concat = curry((y, x) => x + y);
const toUpperCase = str => str.toUpperCase();
const exclaim = str => `${str} !`
const first = xs => xs[0];

const loudStr = compose(exclaim, toUpperCase);

//add('ass') :: (λx.(λy.(add(x, y))))('ass') -> λy.(add(ass, y))
const assinate = compose(add('ass'), loudStr);

console.log(assinate('assassin')); 