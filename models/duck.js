const Animal = require('./animal');

class Duck extends Animal {
    constructor(){
        super('Duck', 'CUACK');
    }

    speak(animalPhrase){
        return super.speak(animalPhrase);
    }
}

module.exports = Duck;