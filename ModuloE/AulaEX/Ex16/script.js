function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        res.innerHTML = `<p>Impossível contar!</p>`
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `<p>Contando:</p>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //Contagem crescente
            for(var c = 1; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        } else {
            //Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}