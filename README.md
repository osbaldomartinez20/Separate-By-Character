# Separate-By-Character

Separates the values in a string by a character given by the user, by default it is separated by commas, and returns a list with the values. Gets rid of the specified character and the first space after each element. If two of the specified character are in a row that means a value of ''.

## Examples

### Separate Samples
const separate = require('separate-by-character');

let first = 'hello, my good, friend.'

let firstTest = separate.separateByCharacter(first);

//firstTest = [ 'hello', 'my good', 'friend' ]

let second = 'I do not know. Maybe I know.. Hello.';

let secondTest = separate.separateByCharacter(second, '.');

//secondTest = [ 'I do not know', 'Maybe I know', '', 'Hello' ]

let third = 'I love;; semicolons;;';

let thirdTest = separate.separateByCharacter(third, ';;');

//Because the paramater for character has a length longer than 1, it defaults to ',' 

//So thirdTest = [ 'I love;; semicolons;;' ]

### Combine Samples
const combine = require('separate-by-character');

