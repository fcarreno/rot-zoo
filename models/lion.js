const Animal = require('./animal');

class Lion extends Animal {
    constructor(){
        super('Lion','ROAR');
    }

    speak(animalPhrase){
        return super.speak(animalPhrase);
    }
}

module.exports = Lion;
