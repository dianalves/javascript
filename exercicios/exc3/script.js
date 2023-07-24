function calcular() {
    let ini = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else  {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando Passo: 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
        }
        
    }
}