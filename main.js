let actionState = false

function actionPomodoro() {
    let actionButton = document.getElementById("actionButton")
    if(!actionState) {
        actionButton.innerHTML = 'STOP'
        //iniciar o cronometro
    } else {
        actionButton.innerHTML = 'START'
        //iniciar o cronometro
    }
    actionState = !actionState
    
}