const add = (x, y) => x + y;
const filter = (f, xs) => xs.filter(f);
const isOdd = x => x % 2 != 0 //predicate

//Proving that
//add(x, y) - two args is === add([x, y]) - single arg.
// 👇
const toPair = f => ([x, y]) => f(x, y);
//const result = toPair(add)([1, 2]);

//Currifies a function that takes two args..
// curry :: (λf.(λx.(λy.(f(x, y)))))
const curry = f => x => y => f(x, y);

// addCurried :: (λf.(λx.(λy.(f(x, y)))))(add) -> (λx.(λy.add(x, y)))
const addCurried = curry(add)

// _filter :: (λf.(λx.(λy.(f(x, y)))))(filter) -> (λf.(λxs.(xs.filter(f))))
const _filter = curry(filter);

// getOdds :: (λf.(λxs.(xs.filter(f))))(isOdd) -> (λ.xs(xs.filter(isOdd)))
const getOdds = _filter(isOdd)

const oddNumbers = getOdds([1, 3, 5, 8, 9]);

console.log(oddNumbers); 