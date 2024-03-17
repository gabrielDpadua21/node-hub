let counter = 0;
console.time("performance");
while (counter < 10000) {
    "JavaScript";
    counter++;
}
console.timeEnd("performance");

counter = 0;
console.time("performance");
while (counter < 10000) {
    new String("JavaScript");
    counter++;
}
console.timeEnd("performance");