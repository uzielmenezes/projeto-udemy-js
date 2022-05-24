function Ninja(nome, qnt) {
    this.name = nome;
    this.shurikens = qnt;

    this.atirarShuriken = (inimigo) => {
        if(this.shurikens > 0) {
            console.log(this.name + ' atirou uma shuriken!');
            this.shurikens -= 1;
            inimigo.vida -= 1;
            if(inimigo.vida > 0) { 
                console.log(inimigo.name+' está com '+inimigo.vida+' pontos de vida!');
            }else {
                console.log(inimigo.name+' morreu!');
                inimigo.vida = 0;
            } 
        }else {
            console.log(this.name + ' não possui mais shurikens!');
        }       
    }
}

function Inimigo(nome) {
    this.name = nome;
    this.vida = 5;
}

let naruto = new Ninja("Naruto", 6);
let sasuke = new Inimigo("Sasuke");

naruto.atirarShuriken(sasuke);

console.log(sasuke);


