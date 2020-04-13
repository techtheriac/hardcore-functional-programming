//Currifies a function that takes two args..
// λ Definition - (λf.(λx.(λy.(f(x, y)))))
const curry = f => x => y => f(x, y);

//definition (λfg.(λx.(f(g(x)))))
const compose = (f, g) => x => f(g(x));

const _compose = curry(compose);

