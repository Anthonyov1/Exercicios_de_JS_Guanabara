function contar(){
    var n1 = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (n1.value.length == 0){
         alert('Digite um número')
    } else {
        var n = Number(n1.value)
        tab.innerHTML = ``
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
