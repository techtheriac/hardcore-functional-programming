//Idenitity Functor
//Provides an interface for dot-chaining
const λ = x =>
  ({
    map: f => λ(f(x)),
    inspect: `λ(${x})`,
    fold: f => f(x)
  });

const nextCharFromNumberToString = str =>
  λ(str)
    .map(x => x.trim())
    .map(trimmed => parseInt(trimmed, 10))
    .map(number => new Number(number + 1))
    .fold(String.fromCharCode);



const result = nextCharFromNumberToString(' 67');
console.log(result);