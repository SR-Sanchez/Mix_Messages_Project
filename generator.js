//Random Movie Critic Generator
export const criticGenerator = {
    firstGenerator(){
        const movieName = ['Matrix','Total Recall','Titanic','Terminator','Heat'];
        const ranIndGen = Math.floor(Math.random()*movieName.length) //random index generator
        return movieName[ranIndGen]
    },
    
    secondGenerator(){
        const adjective = ['suspenseful','sentimental','wacky','satirical','picaresque'];
        const ranIndGen = Math.floor(Math.random()*adjective.length) //random index generator
        return adjective[ranIndGen]
    },

    thirdGenerator(){
        return Math.floor(Math.random()*6) //random starnumber generator
    },

    stringGenerator(){
        return `I found ${this.firstGenerator()} to be ${this.secondGenerator()}. In general it deserves a review of ${this.thirdGenerator()}/5 stars`
    }

}

console.log(criticGenerator.stringGenerator())