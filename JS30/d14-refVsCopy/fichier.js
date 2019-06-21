window.onload=function(){

    // start with strings, numbers and booleans
    // Let's say we have an array

    // const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.

    /* const team = players;

    console.log(players, team);

    team[3] = 'Didi'; */

    // You might think we can just do something like this:
    // however what happens when we update that array?
    // now here is the problem!
    // oh no - we have edited the original array too!
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    // So, how do we fix this? We take a copy instead!
    // one way
    // or create a new array and concat the old one in
    // or use the new ES6 Spread
    // now when we update it, the original one isn't changed
    // The same thing goes for objects, let's say we have a person object

    // with Objects

    /* const person = {
      name: 'Wes Bos',
      age: 80
    }; */

    // and think we make a copy:
    // how do we take a copy instead?
    // We will hopefully soon see the object ...spread
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    
    let str1 = prompt('Enter a word');
    let str2 = prompt('Enter a second word');
    let temporary = '';
    let result = '';

    for(i=0; i<str1.length; i++){
        for(j=0; j<str2.length; j++){
            if(str1[i] === str2[j]){
                temporary = str1[i];
                for(k=0; k<result.length; k++){
                    if(result.indexOf(temporary) === -1){
                        result += str1
                    }
                }
            }
        }
    }

    console.log(result);





}