//// .flat in arrays

let array = [1,2,3,[4,5],6,7]

array.flat();

let array = [1,[[[2,3,]]],[4,5],6,7]

array.flat(10);



////flatMap


let array2 = [1,[[[2,3,]]],[4,5],6,7,[[23,34]]];

array2.flatMap(num => num + 10)


// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

array.flat(2);

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

console.log(greeting.flatMap(x => x.join(' ')));

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
//Solution
console.log(greeting.flatMap(x => x.join(' ')).join(' '))

/// We use .join when we want to turn an array into a string. 
///We can use it twice to completely turn the array into a string

const greeting3 = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

console.log(greeting3.flatMap(x => x.join(' ')).join(' '));
VM12092:3 Hello young grasshopper! you are learning fast!


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
//Solution
console.log(trapped.flat(Infinity))

/// .flat(Infinity) is used to open complex nested arrays
// Infintiy is actually a LARGE number in JavaScipt. It represents the maximum amount of memory that we can hold for a number! Learn more here: https://riptutorial.com/javascript/example/2337/infinity-and--infinity

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
//Solution:
console.log(userEmail3.trimEnd().trimStart())

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersArray = Object.entries(users);


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
//Solution
const updatedUsersArray = usersArray.map((user) => [user[0], user[1]*2])

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
//Solution
const updatedUsers = Object.fromEntries(updatedUsersArray)
console.log(updatedUsers)