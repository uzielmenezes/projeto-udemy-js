let pessoa = {
    name: "Uziel",
    callName() {
        console.log(this.name);
    }
}

pessoa.callName();