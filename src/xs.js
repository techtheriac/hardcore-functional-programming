const filter = (f, xs) => xs.filter(f);
const isOdd = x => x % 2 != 0 //predicate

//Currifies a function that takes two args..
// λ Definition - (λf.(λx.(λy.(f(x, y)))))
const curry = f => x => y => f(x, y);

// Call (λf.(λx.(λy.(f(x, y)))))(add) -> (λx.(λy.add(x, y)))
const addCurried = curry(add)

// Call (λf.(λx.(λy.(f(x, y)))))(filter) -> (λf.(λxs.(xs.filter(f))))
const _filter = curry(filter);

// call (λf.(λxs.(xs.filter(f))))(isOdd) -> (λ.xs(xs.filter(isOdd)))
const getOdds = _filter(isOdd)

const oddNumbers = getOdds([1, 3, 5, 8, 9]);

console.log(oddNumbers); // [1, 3, 5, 9]

