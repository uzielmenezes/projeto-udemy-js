function verificaObjeto(objeto, classe) {
    if(objeto instanceof classe) {
        console.log('O objeto '+objeto.name+' é uma instância de '+classe.name+'!');
    }else {
        console.log('O objeto '+objeto.name+' não é uma instância de '+classe.name+'!');
    }
}

function Car(nome, cor) {
    this.name = nome;
    this.color = cor;
}

function Motorcycle(nome, cor) {
    this.name = nome;
    this.color = cor;
}

let carro = new Car('Bmw', 'Vermelha');
let moto = new Motorcycle('Yamaha', 'Azul');

verificaObjeto(carro, Car);
verificaObjeto(carro, Motorcycle);
verificaObjeto(moto, Motorcycle);
verificaObjeto(moto, Car);