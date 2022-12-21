function averiguar() {
    let form = document.querySelector('.form')
    let txt = document.querySelector('.txt')
    let res = document.querySelector('.res')

    let ale = []

    function recebeEvento(evento) {
        evento.preventDefault()
        let num = document.querySelector('.txtn')

        console.log(ale)
        
        if (num.value < 0 || num.value > 10) {
            alert(`digite um numero entre 0 e 10`)
        }
        if (num.value == '') {
            txt.innerHTML = `<p>[ERRO] DIGITE UM NÚMERO</p>`
        } else {
            ale.push(num.value)
            let cont =  Math.round(Math.random()*10)
            if (num.value != cont) {
                txt.innerHTML = `<p>Continue tentando</p>`
                console.log(cont)
            }else{
                if (num.value == cont) {
                    res.innerHTML += `<p>PARABENS VOCÊ CONSEGUIU EM ${ale.length} TENTATIVAS</p>`
                    console.log(cont)
                }
            }
            num.value = ''
            num.focus()
        }
    }
    form.addEventListener('submit', recebeEvento)
}

averiguar()




