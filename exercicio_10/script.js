class  Ninja {
    constructor(nome, qnt, vida) {
        this.name = nome;
        this.shurikens = qnt;
        this.life = vida;
    };

    atirarShuriken(target) {

        if(this.shurikens > 0) {
            console.log(this.name + ' atirou uma Shuriken.');
            this.shurikens -= 1;
            
            if(target.life > 0) { 
                target.life -= 1;
                console.log(target.name+' está com '+target.life+' pontos de vida.');

                if(target.life == 0) {
                    console.log(target.name+' desmaiou!!');
                }
            }else {
                console.log(target.name + ' já está inconsciente!!');
            } 
        }else {
            console.log(this.name + ' não possui mais Shurikens!!!');
        }       
    }
};


let naruto = new Ninja("Naruto", 6, 3);
let sasuke = new Ninja("Sasuke", 4, 3);

sasuke.atirarShuriken(naruto);
sasuke.atirarShuriken(naruto);
sasuke.atirarShuriken(naruto);
sasuke.atirarShuriken(naruto);


   

