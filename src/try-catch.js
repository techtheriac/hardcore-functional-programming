/*UTILS*/
//==================================================
const fs = require('fs');

const Right = x =>
  ({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    toString: `Right(${x})`
  })

const Left = x =>
  ({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    toString: `Left(${x})`
  })

const fromNullable = x =>
  x != null || undefined ? Right(x) : Left();

const tryCatch = f => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
}

const logIt = x => {
  console.log(x)
  return x;
}

//==========================================================

const getPort_ = () => {
  try {
    const str = fs.readFileSync('config.json');
    const config = JSON.parse(str);
    return config.port;

  } catch (e) {
    return 'error';
  }
}

//Refactoring the above function the functional way.

const getPort = () =>
  tryCatch(() => fs.readFileSync('config.json'))
    .map(contents => JSON.parse(contents))
    .map(config => config.port)
    .fold(
      //left -error Case
      () => 8000,
      //Right 0- success Case
      x => x
    )

console.log(getPort());
