window.onload=function() {
    const people = [
        {name: 'Estel', year: 1984},
        {name: 'Karim', year: 1986},
        {name: 'Kiki', year: 2012},
        {name: 'Fly', year: 1999},
    ];

    const comments = [
        {text: 'Love this!', id: 523423},
        {text: 'Super good', id: 823423},
        {text: 'You are the best', id: 2039842},
        {text: 'Ramen in my fav food ever', id: 123523},
        {text: 'Nice Nice Nice!', id: 542328},
    ]

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 18 ?
    /* const isAdult = people.some(function(person){
        const currentYear = (new Date()).getFullYear();
        if(currentYear - person.year >= 18){
            return true
        }
    }); */
    const isAdult = people.some(person => (
        (new Date()).getFullYear()) - person.year >= 18);
    console.log({isAdult});

    // Array.prototype.every() // Is everyone 18 ?
    const allAdults = people.every(person => (
        (new Date()).getFullYear()) - person.year >= 18);
    console.log({allAdults});

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // Find the comment with the id of 823423
    const found = comments.find(comment => (comment.id === 823423));
    console.log(found);

    // Array.prototype.findIndex()
    // Find the comment with this id
    // delete the comment with the id of 823423
    const index = comments.findIndex(comment => (comment.id === 823423));
    // const spliceComment = comments.splice(index, 1);
    const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1),
    ]
    console.log(newComments);
}