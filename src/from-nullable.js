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

const findColor = name =>
  fromNullable({ red: '#FF4444', blue: '#3b5998', yellow: '#fff68f' }[name])

const result =
  findColor('red')
    //handle errors or return value
    .fold(
      //left case
      () => 'no color',
      //right case
      color => color
    )

console.log(result);