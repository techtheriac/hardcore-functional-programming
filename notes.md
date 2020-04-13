## Functional Programming
  Programming with functions.

- Total Function - For every input there is a corresponding output.
- Deterministic - Always recieves the same output for a given input.
- No side effects- No observable effects besides computing a value.

## Properties
- Associativity 
  ```javascript
  add(x, add(y, z)) == add(add(x, y), z)
  ```
  In terms of Maths
  ```
  x + (y + z) = (x + y) + z
  ```
- Commutativity
  ```javascript
    add(x, y) == add(y, x)
  ```
  In terms of Maths
  ```
  x + y = y + x
  ```
- Identity 
  ```javascript
  add(x, 0) == x
  ```
  In terms of Maths
  ```
  x + 0 = x
  ```
- Distributivity 
  ```javascript
    add(multiply(x, y), multiply(x, z)) == multiply(x, add (y, z))
    ```
  In terms of Maths
  ```
  x * y + x * z = x * (y + z)
  ```
