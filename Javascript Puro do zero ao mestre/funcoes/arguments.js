const somar = function Soma() {
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}

console.log(somar.name)
//console.log(somar(1, 2, 3, 4, 5))
