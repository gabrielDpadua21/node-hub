const cat = {
    name: 'frajola',
    size: 'small',
    skills: ['sleep', 'evil face'],
    age: 5
}

const {name, size, skills} = cat;

bio = `${name} is a ${size} skilled in ${skills.join(' & ')}`;

console.log(bio);

function catAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = catAge`This cat is ${cat.age}`;

console.log(bio2);