let carro = {
    portas: 4,
    cor: "Vermelha",
    adicionais: [
        "ar-condicionado",
        "som",
        "teto solar"
    ],
    vaiEquipado: false
}

let pessoa = {
    nome: "Uziel"
}

console.log(carro.adicionais);
console.log(carro.adicionais[0].length);
if(carro.vaiEquipado == false) {
    console.log("não vai equipado");
}