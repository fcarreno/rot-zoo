// Accepted command line params expected are:
// --specie=LION|DUCK|TIGER|CUSTOM
// --phrase=phrase
// --customSound=sound (available for custom species only)
const cmdLineParsedParams = require('minimist')(process.argv.slice(2)); // Getting values starting from 3rd cmd line parameter and on (after `node zoo.js`)
const { specie, customSound, phrase } = cmdLineParsedParams;
const Lion = require('./models/lion');
const Duck = require('./models/duck');
const Tiger = require('./models/tiger');
const Animal = require('./models/animal');

animalSpeak(specie, customSound, phrase);

function animalSpeak(specie, customSound, phrase){

  let animal = getAnimalFromZoo(specie, customSound);
  console.log(`Your animal is ${animal.name}`);
  console.log(`And says "${animal.speak(phrase)}"`);

}

function getAnimalFromZoo(specie, customSound){

    let animal;
    switch(specie){

        case 'LION':
            animal = new Lion();
            break;

        case 'DUCK':
            animal = new Duck();
            break;

        case 'TIGER':
            animal = new Tiger();
            break;

        default:
            animal = new Animal(specie, customSound);

    }
    return animal;
}



