window.onload=function() {

    const inventors = [
        {first: 'Audrey', last:'Balsam', year:1867, passed:1868},
        {first: 'Peter', last:'Caram', year:1977, passed:2018},
        {first: 'Graham', last:'Motor', year:1634, passed:1720},
        {first: 'Minnie', last:'Intel', year:1896, passed:1960},
        {first: 'Charlie', last:'Carn', year:1790, passed:1845},
        {first: 'Perrine', last:'Popu', year:1914, passed:2000},
        {first: 'Selma', last:'Ours', year:1897, passed:1984},
    ]

    const people = ['Rom, Viviane', 'Tomb, Cassandre', 'Mahalm, Pete', 'Danger, Nutel', 'Friss, Samantha',
                    'Glenn, Tom', 'Persi, Trish', 'Floor, Jule', 'Manik, Alexia', 'Burton, Tim', 
                    ];

    // Array.prototype.filter()
    // 1. filter the list of inventors for those who where born in the 1800's
    const filter = inventors.filter(inventor => inventor.year >=1800 && inventor.year <1900);
    console.table(filter)

    // Array.prototype.map()
    // 2. give an array of the inventory first and last names
    const map = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
    console.table(map)

    // Array.prototype.sort()
    // 3. sort the inventors by birthdate, oldest to youngest
    const sort = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(sort)

    // Array.prototype.reduce()
    // 4. how many years did all the inventors live ?
    const reduce = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0)
    console.log(reduce)

    // 5. Sort the inventors by years lived
    const oldest = inventors.sort(function(a, b){
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;
        return lastGuy > nextGuy ? -1 : 1;
    });
    console.table(oldest)

    // 6. create a list of Boulevards in Paris that contain 'de' in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    /* const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelectorAll('a'));
    const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes(' de ')) */
    
    // 7. sort Exercise
    // sort the people alphabetically by last name
    const alpha = people.sort(function(lastOne, nextOne){
        const [alast, afirst] = lastOne.split(', ');
        const [blast, bfirst] = nextOne.split(', ');
        return alast > blast ? 1 : -1;
    });
    console.log(alpha); 

    // 8. reduce exercise
    // sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
    const transportation = data.reduce(function(obj, item) {
        if(!obj[item]){
            obj[item] = 0;
        };
        obj[item]++;
        return obj;
    }, {});
    console.log(transportation);

    // 9. Exo Bertrand
    let promo = []
    let user = 
    [
        {
            "name": "Jean",
            "promo": "A"
        },
        {
            "name": "Pierre",
            "promo": "B"
        },
        {
            "name": "Michel",
            "promo": "C"
        },
        {
            "name": "Nicolas",
            "promo": "D"
        },
        {
            "name": "Lucie",
            "promo": "D"
        },
        {
            "name": "Julie",
            "promo": "B"
        },
        {
            "name": "Laura",
            "promo": "A"
        },
        {
            "name": "Justine",
            "promo": "A"
        }
    ]

    for(i=0; i<user.length; i++){
        console.log(i)
        let isin = false;
        for(j=0; j<promo.length; j++) {
            if(user[i].promo===promo[j]){
                isin=true
            }
        }
        if(isin===false){
            promo.push(user[i].promo)
        }
    }
    console.table(promo)
    
}
    
    