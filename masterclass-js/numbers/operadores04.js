// OR bit a bit
console.log("OPERADOR | - 4 & 3");
console.log(4 | 3)
console.log((4).toString(2).padStart(32,0));
console.log((3).toString(2).padStart(32,0));
console.log((7).toString(2).padStart(32,0));
console.log(0b111);

// AND bit a bit
console.log("OPERADOR & - 3 & 1");
console.log(3 & 1);
console.log((3).toString(2).padStart(32,0));
console.log((1).toString(2).padStart(32,0));
console.log((1).toString(2).padStart(32,0));
console.log(0b1);

// XOR bit a bit
console.log("OPERADOR ^ - 3 ^ 1");
console.log(5 ^ 2);
console.log((5).toString(2).padStart(32,0));
console.log((2).toString(2).padStart(32,0));
console.log((7).toString(2).padStart(32,0));
console.log(0b111);

// NOT bit a bit
console.log("OPERADOR ~ - ~2");
console.log(~2);
console.log((2).toString(2).padStart(32,0));
console.log((-3 >>> 0).toString(2).padStart(32,0));


// shift left
console.log("OPERATOR SHIFT LEFT - 4 << 2");
console.log(4 << 2);
console.log((4).toString(2).padStart(32,0));
console.log((16).toString(2).padStart(32,0));

// shift right
console.log("OPERATOR shift right - 128 >> 1");
console.log(128 >> 1);
console.log((128).toString(2).padStart(32,0));
console.log((64).toString(2).padStart(32,0));

// shift right com inversão de sinal
console.log("OPERATOR shift right | -2 >>> 1");
console.log(-2 >>> 1);
console.log((-2 >>> 0).toString(2).padStart(32,0));
console.log((2147483647).toString(2).padStart(32,0));