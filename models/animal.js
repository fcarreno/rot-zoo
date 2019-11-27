class Animal {
    constructor(name, sound){
        this.name = name || 'GenericAnimal';
        this.sound = sound || 'DefaultSound';
    }

    speak(inputPhrase){

        let animalPhrase = '';
        if(inputPhrase && inputPhrase.length){
            inputPhrase = inputPhrase.trim();
            let animalPhraseWords = inputPhrase.split(' ');
            for(let i=0;i<animalPhraseWords.length;i++){
                animalPhrase+= ' ' + animalPhraseWords[i] + ' ' + this.sound;
            }
        }
        else{
            animalPhrase = 'SILENCE? :-)';
        }
        return animalPhrase.trim(); // trim leading space from output...
    }
}

module.exports = Animal;
