const Animal = require('./animal');

class Tiger extends Animal {
    constructor(){
        super('Tiger', 'GRRR');
    }

    speak(animalPhrase){
        return super.speak(animalPhrase);
    }
}

module.exports = Tiger;