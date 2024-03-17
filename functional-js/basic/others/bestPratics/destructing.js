    const cat = {
        name: 'Thor',
        legs: 4,
        shell: true,
        type: 'mamiferous',
        meal: 10,
        diet: 'milk'
    };

    // object destructing tecnic ...
    function feed({name, meal, diet}) {
        return `Feed ${name} ${meal} litros of ${diet}`;
    }

    // OR

    function feed2(animal) {
        const {name, meal, diet} = animal;

        return `Feed ${name} ${meal} litros of ${diet}`;
    }

    console.log(feed(cat));

    console.log(feed2(cat));