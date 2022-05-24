function Ninja(nome, qnt) {
    this.name = nome;
    this.shurikens = qnt;
    this.atirarShuriken = () => {
        if(this.shurikens > 0) {
            console.log(this.name + ' atirou uma shuriken!');
            this.shurikens -= 1; 
        }else {
            console.log(this.name + ' não possui mais shurikens!');
        }       
    }
}

let ninja1 = new Ninja("Naruto", 4);


ninja1.atirarShuriken();
ninja1.atirarShuriken();
ninja1.atirarShuriken();
ninja1.atirarShuriken();
ninja1.atirarShuriken();


