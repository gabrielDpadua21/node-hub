// Closure e quando uma funcao "lembra" seu escopo lexico
// mesmo quando a funcao e executada fora desse escopo

// Escopo lexico
// Local onde a funcao foi escrita fisicamente no codigo

/**
 * Arquivo - index.js
 *
 *      function helloWord() 
 * 
 * 
 * Escopo lexico da funcao helloWord e o arquivo index.js
 * 
 */

const fora = require('./escopo');

const value = 1000;
console.log(fora())