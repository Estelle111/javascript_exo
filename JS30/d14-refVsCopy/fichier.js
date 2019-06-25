window.onload=function(){

    // start with strings, numbers and booleans
    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;
    /* console.log(players, team); */

    // You might think we can just do something like this:
    team[3] = 'Didi';

    // however what happens when we update that array?
    // now here is the problem!
    // oh no - we have edited the original array too!
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();

    // one way
    // or create a new array and concat the old one in
    const team3 = [].concat(players);

    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] = 'hep';
    
    const team5 = Array.from(players);
    // console.log(players, team2, team3, team4, team5);
    team5[3] = 'cool';
    // console.log(team5);

    // now when we update it, the original one isn't changed
    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
        name: 'estelle',
        age: 99
    };

    // and think we make a copy but it's a reference:
    /* const thisIsNotACopy = person;
    thisIsNotACopy.number = 9; */

    // how do we take a copy instead?
    const thisIsACopy = Object.assign({}, person, { number: 43, age: 9 });
    // console.log(person, thisIsACopy);

    // We will hopefully soon see the object ...spread
    // const thisIsACopySpread = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const kiki = {
        name: 'Kiki',
        age: 7,
        social: {
            petAndFood: '@kiki',
            cuddle: 'kiki!'
        }
    };
    console.log(kiki);

    const cat = Object.assign({}, kiki);
    cat.name = 'lili';
    /* cat.social.cuddle = '@lili' */
    console.log(cat);

    const cat2 = JSON.parse(JSON.stringify(kiki));
    cat2.name = 'Edouard'
    cat2.social.cuddle = '@Edouard'
    console.log(cat2);

    /* let str1 = prompt('Enter a word');
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
    console.log(result); */





}