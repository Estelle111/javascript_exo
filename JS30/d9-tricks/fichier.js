window.onload=function(){

    const dogs = [
        {name:'Medor', age:2},
        {name:'Mercure', age:8}
    ];
    const p = document.querySelector('p');
    function makeGreen() {
        
        p.style.color='#ff0060';
        p.style.fontSize='50px';
    }
    p.addEventListener('click', makeGreen);

    // Regular
    console.log('hello');

    // Interpolated
    console.log('hello I\'m a %s string', '💩');

    // Styled
    console.log('%c I am some great text', 'font-size: 50px; background:red;');

    // Warning!
    console.warn('OH NOOO');

    // Error :/
    console.error('shit!');

    // Info
    console.info('OH NOOO');

    // Testing
    console.assert(p.classList.contains('ouch'), 'that is wrong');

    // Clearing
    console.clear();

    // Viewing DOM elements
    console.log(p);
    console.dir(p);

    console.clear();

    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age}`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
    })

    // Counting
    console.count('break')

    // Timing
    console.time('fetching data');
    fetch('https://api.github.com/users/Estelle111')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data')
        })

    console.table(dogs)
}