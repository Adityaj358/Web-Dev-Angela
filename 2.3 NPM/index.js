//var generateName = require("sillyname")

import generateName from "sillyname"
var sillyname = generateName();

console.log(`my name is ${sillyname}`);


//const superHeroes = require("superheroes")
import superHeroes from "superheroes"
const name = superHeroes.random()

console.log(`my name is ${name}`);