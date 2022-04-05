let actionState = false
let inicio = 600
let final = 0

function actionPomodoro() {
    let actionButton = document.getElementById("actionButton")
    if (!actionState) {
        actionButton.innerHTML = 'STOP'
        //iniciar o cronometro
        iniciarCronometro()
    } else {
        actionButton.innerHTML = 'START'
        //iniciar o cronometro
    }
    actionState = !actionState


}

function iniciarCronometro() {
   
    let segundos = 0
    let minutos = Math.floor(inicio/60) 
    let timerText =document.getElementById("timerText")

    setInterval(() => {
        if(segundos == 0) {
            segundos = 60 
            minutos--
        } 
        inicio-- 
        segundos-- 
        timerText.innerHTML = `${(minutos < 10) ? "0" + minutos : minutos}:${(segundos < 10) ? "0" + segundos : segundos}`
    }, 1000)

    

    //quando finalizar vai executar funçoes de termino - zerar cronometro e tocar 





}