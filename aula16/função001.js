function parimpar(num) {
    if (num % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let resp = parimpar(10)
console.log(`O número digitado é ${resp}`)