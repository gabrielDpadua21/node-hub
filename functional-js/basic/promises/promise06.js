const p1 = new Promise(() => {});

console.log("Type of: ", typeof p1);

console.log("Is promise: ", Promise.resolve(p1) === p1);