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
  x != null ? Right(x) : Left();

const findColor = name => {
  const found = { red: '#FF4444', blue: '#3b5998', yellow: '#fff68f' }[name]
  return found ? Right(found) : Left('Fuck off')
}

const result = () =>
  findColor('redh')
    //handle errors or return value
    .fold(
      () => 'no color', //left case
      color => color //right case
    )

console.log(result());