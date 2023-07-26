let num = [8, 6, 5, 3, 9]

/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(2)

if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`o valor está na posição ${pos}`)
}