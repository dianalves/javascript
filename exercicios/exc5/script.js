let num = document.getElementById('inumero')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function adicionar() {
    var n = Number(num.value)
    if (n > 100 || n < 1 || num.value.length == 0) {
        window.alert('Favor informar um valor válido')
    } else if (valores.indexOf(n) == -1) {
        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        item.value = `val${n}`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert(`O valor ${n} já foi cadastrado`)
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}