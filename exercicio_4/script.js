function Ninja(nome) {
    this.name = nome;
    this.atirarShuriken = () => {
        console.log(this.name + ' atirou uma shuriken!');
    };
}

let ninja1 = new Ninja("Naruto");

ninja1.atirarShuriken();