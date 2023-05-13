var txtv = document.getElementById('txtvel')
let multa = document.getElementById('txtmulta')
let carro = document.getElementById('car')
let radar = document.getElementById('radar')
let viatura = document.getElementById('vtr')

    function calcularmulta(){
        multa = Number(txtmulta.value)
    }

    function calcular(){
        var vel = Number(txtv.value)
        var res = document.getElementById('res')
        multa
        res.innerHTML = (`Sua velocidade atual é: <strong>${vel} km/h.</strong> <br>`)
        if(vel > 60 && vel < 150) {
            res.innerHTML += (`Você foi multado, e terá que pagar o valor de ${multa.toLocaleString('pt-br', {style: "currency", currency: "BRL"})} ultrapassou a velocidade de 60km/h`)
            carro.src = "assets/Icons/icons8-car-48.png"
        }

        else if(vel >= 150){
            multa = multa+multa*0.5 
            res.innerHTML += (`Você foi multado e passou dos <strong>150Km/h </strong>, e terá que pagar o valor de ${multa.toLocaleString('pt-br', {style: "currency", currency: "BRL"})}<br>(Acrescentado 50% do valor da multa por excesso de velocidade.)`)

            viatura.src = "assets/Icons/icons8-oncoming-police-car-48.png"
        }

        else {
            res.innerHTML += ('Você não foi multado pois está dentro do limite de velocidade.')

        }
        
        res.innerHTML += ('<p>Dirija sempre com cinto de segurança</p>')
    }