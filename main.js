/*
Your job is to sign each of these promising young music stars to the appropriate label.

JumpStop Records works with Funk and Rap artists.
Chatten Records works with Country and Bluegrass artists.
Polar Records works with Pop artists.
Create an array for each of these record labels.

Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

Bruce Atikins is a Country artist and is 23 years old
Jensen Brown is a Pop artist and is 20 years old
Dre Funkz is a Funk artist and is 25 years old
Dusta Grimes is a Rap artist and is 21 years old
Bartholomew Danielson is a Bluegrass artist and is 23 years old
Avilee Dallas is a Country artist and is 19 years old
Austin Kinkaid is a Pop artist and is 22 years old
Loyoncé Branis is a Rap artist and is 27 years old 
*/

const JumpStop = [];
const Chatten = [];
const Polar = [];

const createCountryArtist = (name, age) => ({
    "name": name,
    "age": age,
    "genre": "country"
});

const createPopArtist = (name, age) => ({
    "name": name,
    "age": age,
    "genre": "pop" 
});

const createBluegrassArtist = (name, age) => ({
    "name": name,
    "age": age,
    "genre": "bluegrass"
});

const createRapArtist = (name, age) => ({
    "name": name,
    "age": age,
    "genre": "rap" 
});

const createFunkArtist = (name, age) => ({
    "name": name,
    "age": age,
    "genre": "funk" 
});
// adding artist to the appropriate arrays
// ========== rap & funk ==============
JumpStop.push(createRapArtist("Loyoncé Branis", 27));
JumpStop.push(createRapArtist("Dusta Grimes", 21));
JumpStop.push(createFunkArtist("Dre Funkz", 25));

// ========== country & bluegrass ==============
Chatten.push(createBluegrassArtist("Bartholomew Danielson", 21));
Chatten.push(createCountryArtist("Avilee Dallas", 19));
Chatten.push(createCountryArtist("Bruce Atikins", 23));

// ========== pop ==============
Polar.push(createPopArtist("Jensen Brown", 20));
Polar.push(createPopArtist("Austin Kinkaid", 22));

console.log(Polar, Chatten, JumpStop);